import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FilePlus2, LogOut, Paperclip, Save, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { formatClassDate, loadPosts, postCategories, type ClassPost, type PostCategory, type PostFile } from '../lib/classroom';

type Consultation = {
  id?: string;
  name?: string;
  contact?: string;
  organization?: string;
  interest?: string;
  message?: string;
  created_at?: string;
};

type Editor = {
  title: string;
  summary: string;
  body: string;
  category: PostCategory;
  course_name: string;
  class_date: string;
  resource_url: string;
  published: boolean;
};

const emptyEditor: Editor = {
  title: '', summary: '', body: '', category: '수업 기록', course_name: '',
  class_date: '', resource_url: '', published: false,
};
const bucket = 'class-materials';
const maxFileSize = 25 * 1024 * 1024;

export default function Admin() {
  const [access, setAccess] = useState<'checking' | 'signed-out' | 'forbidden' | 'ready' | 'error'>('checking');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [tab, setTab] = useState<'consultations' | 'posts'>('consultations');
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [posts, setPosts] = useState<ClassPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editor, setEditor] = useState<Editor>(emptyEditor);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);

  const checkAccess = useCallback(async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) { setAccess('signed-out'); return; }
    const result = await supabase.from('site_admins').select('user_id').eq('user_id', user.id).maybeSingle();
    if (result.error) { setAccess('error'); setMessage('관리자 권한을 확인하지 못했습니다. 잠시 후 다시 시도해 주세요.'); return; }
    if (!result.data) { setAccess('forbidden'); return; }
    setUserId(user.id);
    setAccess('ready');
  }, []);

  useEffect(() => { void checkAccess(); }, [checkAccess]);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const [consultationResult, postResult] = await Promise.all([
        supabase.from('consultations').select('*').order('created_at', { ascending: false }),
        loadPosts(false),
      ]);
      if (consultationResult.error) throw consultationResult.error;
      setConsultations((consultationResult.data ?? []) as Consultation[]);
      setPosts(postResult);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : '관리자 데이터를 불러오지 못했습니다.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { if (access === 'ready') void refresh(); }, [access, refresh]);

  async function signIn(event: FormEvent) {
    event.preventDefault();
    setMessage('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setLoading(false);
    if (error) { setMessage('로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.'); return; }
    setPassword('');
    await checkAccess();
  }

  async function signOut() {
    await supabase.auth.signOut();
    setAccess('signed-out');
    setUserId('');
    setConsultations([]);
    setPosts([]);
  }

  function openEditor(post?: ClassPost) {
    setEditingId(post?.id ?? null);
    setEditor(post ? {
      title: post.title, summary: post.summary, body: post.body, category: post.category,
      course_name: post.course_name, class_date: post.class_date ?? '',
      resource_url: post.resource_url ?? '', published: post.published,
    } : emptyEditor);
    setPendingFiles([]);
    setMessage('');
    setEditorOpen(true);
    setTab('posts');
  }

  async function savePost(event: FormEvent) {
    event.preventDefault();
    if (!userId || !editor.title.trim() || !editor.summary.trim() || !editor.body.trim()) return;
    if (editor.resource_url && !/^https:\/\//.test(editor.resource_url)) { setMessage('관련 링크는 https:// 주소를 입력해 주세요.'); return; }
    if (pendingFiles.some((file) => file.size > maxFileSize)) { setMessage('첨부파일은 파일당 25MB 이하로 선택해 주세요.'); return; }
    setSaving(true);
    setMessage('');
    try {
      const fields = {
        title: editor.title.trim(), summary: editor.summary.trim(), body: editor.body.trim(),
        category: editor.category, course_name: editor.course_name.trim(),
        class_date: editor.class_date || null, resource_url: editor.resource_url.trim() || null,
        published: editor.published, updated_at: new Date().toISOString(),
      };
      const result = editingId
        ? await supabase.from('class_posts').update(fields).eq('id', editingId).select('id').single()
        : await supabase.from('class_posts').insert({ ...fields, created_by: userId }).select('id').single();
      if (result.error || !result.data) throw result.error ?? new Error('게시물을 저장하지 못했습니다.');
      const postId = result.data.id as string;

      for (const file of pendingFiles) {
        const extension = file.name.includes('.') ? `.${file.name.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '')}` : '';
        const storagePath = `${postId}/${crypto.randomUUID()}${extension}`;
        const upload = await supabase.storage.from(bucket).upload(storagePath, file, { contentType: file.type || 'application/octet-stream' });
        if (upload.error) throw upload.error;
        const record = await supabase.from('class_post_files').insert({
          post_id: postId, storage_path: storagePath, filename: file.name,
          content_type: file.type || 'application/octet-stream', size_bytes: file.size,
        });
        if (record.error) {
          await supabase.storage.from(bucket).remove([storagePath]);
          throw record.error;
        }
      }
      setEditorOpen(false);
      setPendingFiles([]);
      await refresh();
    } catch (error) {
      await refresh();
      setMessage(error instanceof Error ? error.message : '저장 중 오류가 발생했습니다.');
    } finally {
      setSaving(false);
    }
  }

  async function removeFile(file: PostFile) {
    if (!window.confirm(`'${file.filename}' 파일을 삭제할까요?`)) return;
    setMessage('');
    const result = await supabase.from('class_post_files').delete().eq('id', file.id);
    if (result.error) { setMessage(result.error.message); return; }
    const removed = await supabase.storage.from(bucket).remove([file.storage_path]);
    if (removed.error) setMessage(`목록에서는 삭제했지만 저장소 파일을 정리하지 못했습니다: ${removed.error.message}`);
    await refresh();
  }

  async function removePost(post: ClassPost) {
    if (!window.confirm(`'${post.title}' 게시물과 첨부파일을 삭제할까요?`)) return;
    setMessage('');
    const paths = post.class_post_files.map((file) => file.storage_path);
    const result = await supabase.from('class_posts').delete().eq('id', post.id);
    if (result.error) { setMessage(result.error.message); return; }
    if (paths.length) {
      const removed = await supabase.storage.from(bucket).remove(paths);
      if (removed.error) setMessage(`게시물은 삭제했지만 저장소 파일을 정리하지 못했습니다: ${removed.error.message}`);
    }
    if (editingId === post.id) setEditorOpen(false);
    await refresh();
  }

  if (access !== 'ready') return (
    <div className="min-h-screen bg-brand-bg-soft flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm bg-white border border-brand-primary/10 rounded-md p-7 shadow-sm">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-brand-primary/60 hover:text-brand-accent mb-8"><ArrowLeft size={16} /> 홈페이지</Link>
        <h1 className="text-2xl font-bold mb-2">KION Labs 관리자</h1>
        {access === 'checking' ? <p className="text-sm text-brand-primary/60">권한을 확인하는 중입니다.</p> : access === 'forbidden' ? <><p className="text-sm text-red-600 my-5">관리자 권한이 없는 계정입니다.</p><button onClick={signOut} className="text-sm font-semibold text-brand-accent cursor-pointer">로그아웃</button></> : access === 'error' ? <><p role="alert" className="text-sm text-red-600 my-5">{message}</p><button onClick={checkAccess} className="text-sm font-semibold text-brand-accent cursor-pointer">다시 확인</button></> : (
          <form onSubmit={signIn} className="space-y-4 mt-7">
            <label className="block text-sm font-semibold">이메일<input type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} className="block w-full mt-2 border border-brand-primary/20 rounded-md px-3 py-2.5 focus:outline-none focus:border-brand-accent" /></label>
            <label className="block text-sm font-semibold">비밀번호<input type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="block w-full mt-2 border border-brand-primary/20 rounded-md px-3 py-2.5 focus:outline-none focus:border-brand-accent" /></label>
            {message && <p role="alert" className="text-sm text-red-600">{message}</p>}
            <button type="submit" disabled={loading} className="w-full bg-brand-accent text-white font-bold py-3 rounded-md hover:opacity-90 disabled:opacity-50 cursor-pointer">{loading ? '확인 중...' : '로그인'}</button>
          </form>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-bg-soft text-brand-primary">
      <header className="bg-white border-b border-brand-primary/10"><div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between"><div className="font-bold text-lg">KION Labs <span className="text-brand-accent">관리자</span></div><div className="flex items-center gap-4"><Link to="/classroom" className="text-sm font-semibold hover:text-brand-accent">자료실 보기</Link><button type="button" onClick={signOut} title="로그아웃" className="p-2 hover:text-brand-accent cursor-pointer"><LogOut size={18} /></button></div></div></header>
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8"><div><h1 className="text-3xl font-bold mb-2">운영 관리</h1><p className="text-brand-primary/60 text-sm">상담 신청과 수업 자료를 관리합니다.</p></div><button type="button" onClick={() => openEditor()} className="inline-flex items-center gap-2 bg-brand-accent text-white px-4 py-2.5 rounded-md text-sm font-bold hover:opacity-90 cursor-pointer"><FilePlus2 size={17} /> 새 자료</button></div>
        <div className="flex gap-6 border-b border-brand-primary/15 mb-6" role="tablist" aria-label="관리 메뉴"><button type="button" role="tab" aria-selected={tab === 'consultations'} onClick={() => setTab('consultations')} className={`pb-3 text-sm font-bold cursor-pointer ${tab === 'consultations' ? 'text-brand-accent border-b-2 border-brand-accent' : 'text-brand-primary/55'}`}>상담 신청 <span className="ml-1">{consultations.length}</span></button><button type="button" role="tab" aria-selected={tab === 'posts'} onClick={() => setTab('posts')} className={`pb-3 text-sm font-bold cursor-pointer ${tab === 'posts' ? 'text-brand-accent border-b-2 border-brand-accent' : 'text-brand-primary/55'}`}>수업 자료 <span className="ml-1">{posts.length}</span></button></div>
        {message && <div role="alert" className="mb-5 p-3 border border-red-200 bg-red-50 text-red-700 text-sm rounded-md">{message}</div>}
        {loading ? <p className="py-12 text-center text-brand-primary/60">불러오는 중입니다.</p> : tab === 'consultations' ? (
          consultations.length === 0 ? <div className="bg-white border border-brand-primary/10 rounded-md p-12 text-center text-brand-primary/60">아직 접수된 상담 신청이 없습니다.</div> : <div className="bg-white border border-brand-primary/10 rounded-md divide-y divide-brand-primary/10">{consultations.map((item, index) => <div key={item.id ?? index} className="p-5 md:p-6 grid md:grid-cols-[180px_1fr] gap-3 md:gap-8"><div><p className="font-bold">{item.name || '이름 없음'}</p><p className="text-sm text-brand-primary/60 mt-1">{item.organization || '소속 미입력'}</p><p className="text-xs text-brand-primary/45 mt-3">{item.created_at ? new Date(item.created_at).toLocaleString('ko-KR') : ''}</p></div><div className="min-w-0"><p className="text-sm font-semibold text-brand-accent mb-2">{item.interest || '관심 분야 미입력'}</p><p className="text-sm whitespace-pre-wrap break-words leading-6 mb-3">{item.message || '문의 내용 없음'}</p><a href={`tel:${item.contact || ''}`} className="text-sm font-semibold hover:text-brand-accent">{item.contact || '연락처 없음'}</a></div></div>)}</div>
        ) : editorOpen ? (
          <div className="grid lg:grid-cols-[minmax(0,1fr)_250px] gap-6 items-start">
            <form onSubmit={savePost} className="bg-white border border-brand-primary/10 rounded-md p-5 md:p-7 space-y-5">
              <div className="flex items-center justify-between"><h2 className="text-xl font-bold">{editingId ? '자료 수정' : '새 자료'}</h2><button type="button" onClick={() => setEditorOpen(false)} className="text-sm text-brand-primary/60 hover:text-brand-accent cursor-pointer">목록으로</button></div>
              <label className="block text-sm font-semibold">제목<input required maxLength={120} value={editor.title} onChange={(event) => setEditor({ ...editor, title: event.target.value })} className="block w-full mt-2 border border-brand-primary/20 rounded-md px-3 py-2.5 focus:outline-none focus:border-brand-accent" /></label>
              <label className="block text-sm font-semibold">요약<input required maxLength={250} value={editor.summary} onChange={(event) => setEditor({ ...editor, summary: event.target.value })} className="block w-full mt-2 border border-brand-primary/20 rounded-md px-3 py-2.5 focus:outline-none focus:border-brand-accent" /></label>
              <div className="grid sm:grid-cols-2 gap-5"><label className="block text-sm font-semibold">분류<select value={editor.category} onChange={(event) => setEditor({ ...editor, category: event.target.value as PostCategory })} className="block w-full mt-2 border border-brand-primary/20 rounded-md px-3 py-2.5 bg-white">{postCategories.map((category) => <option key={category}>{category}</option>)}</select></label><label className="block text-sm font-semibold">수업일<input type="date" value={editor.class_date} onChange={(event) => setEditor({ ...editor, class_date: event.target.value })} className="block w-full mt-2 border border-brand-primary/20 rounded-md px-3 py-2.5" /></label></div>
              <label className="block text-sm font-semibold">수업명·기관명<input maxLength={120} value={editor.course_name} onChange={(event) => setEditor({ ...editor, course_name: event.target.value })} className="block w-full mt-2 border border-brand-primary/20 rounded-md px-3 py-2.5 focus:outline-none focus:border-brand-accent" /></label>
              <label className="block text-sm font-semibold">본문<textarea required rows={12} value={editor.body} onChange={(event) => setEditor({ ...editor, body: event.target.value })} className="block w-full mt-2 border border-brand-primary/20 rounded-md px-3 py-2.5 leading-7 focus:outline-none focus:border-brand-accent" /></label>
              <label className="block text-sm font-semibold">관련 자료 링크 (선택)<input type="url" placeholder="https://" value={editor.resource_url} onChange={(event) => setEditor({ ...editor, resource_url: event.target.value })} className="block w-full mt-2 border border-brand-primary/20 rounded-md px-3 py-2.5 focus:outline-none focus:border-brand-accent" /></label>
              <label className="block text-sm font-semibold">첨부파일 (파일당 최대 25MB)<input type="file" multiple onChange={(event) => setPendingFiles(Array.from(event.target.files ?? []))} className="block w-full mt-2 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-brand-bg-soft file:px-3 file:py-2 file:font-semibold file:cursor-pointer" /></label>
              {pendingFiles.length > 0 && <p className="text-xs text-brand-primary/60">{pendingFiles.map((file) => file.name).join(', ')}</p>}
              <label className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer"><input type="checkbox" checked={editor.published} onChange={(event) => setEditor({ ...editor, published: event.target.checked })} className="accent-[#FF8D70]" /> 공개하기</label>
              <div className="flex gap-3 pt-2"><button type="submit" disabled={saving} className="inline-flex items-center gap-2 bg-brand-accent text-white px-5 py-2.5 rounded-md text-sm font-bold hover:opacity-90 disabled:opacity-50 cursor-pointer"><Save size={17} /> {saving ? '저장 중...' : '저장'}</button><button type="button" onClick={() => setEditorOpen(false)} className="border border-brand-primary/20 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-brand-bg-soft cursor-pointer">취소</button></div>
            </form>
            <aside className="bg-white border border-brand-primary/10 rounded-md p-5"><h3 className="font-bold mb-4">기존 첨부파일</h3>{!editingId || !posts.find((post) => post.id === editingId)?.class_post_files.length ? <p className="text-sm text-brand-primary/50">첨부파일이 없습니다.</p> : posts.find((post) => post.id === editingId)?.class_post_files.map((file) => <div key={file.id} className="flex items-center gap-2 py-2 border-b border-brand-primary/10 text-sm"><Paperclip size={15} className="shrink-0" /><span className="truncate flex-1" title={file.filename}>{file.filename}</span><button type="button" onClick={() => void removeFile(file)} title="첨부파일 삭제" className="p-1 hover:text-red-600 cursor-pointer"><Trash2 size={15} /></button></div>)}</aside>
          </div>
        ) : posts.length === 0 ? <div className="bg-white border border-brand-primary/10 rounded-md p-12 text-center text-brand-primary/60">아직 작성한 수업 자료가 없습니다.</div> : <div className="bg-white border border-brand-primary/10 rounded-md divide-y divide-brand-primary/10">{posts.map((post) => <div key={post.id} className="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5"><div className="min-w-0 flex-1"><div className="flex items-center gap-2 text-xs mb-2"><span className={`font-bold ${post.published ? 'text-emerald-600' : 'text-brand-primary/50'}`}>{post.published ? '공개' : '초안'}</span><span className="text-brand-primary/50">{post.category}</span><span className="text-brand-primary/50">{formatClassDate(post.class_date)}</span></div><h2 className="font-bold truncate">{post.title}</h2><p className="text-sm text-brand-primary/55 truncate">{post.summary}</p></div><div className="flex gap-2 shrink-0"><button type="button" onClick={() => openEditor(post)} className="border border-brand-primary/20 rounded-md px-3 py-2 text-sm font-semibold hover:border-brand-accent cursor-pointer">수정</button><button type="button" onClick={() => void removePost(post)} title="게시물 삭제" className="border border-brand-primary/20 rounded-md px-3 py-2 text-red-600 hover:border-red-400 cursor-pointer"><Trash2 size={17} /></button></div></div>)}</div>}
      </main>
    </div>
  );
}
