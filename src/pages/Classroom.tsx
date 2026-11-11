import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Download, FileText, Link2, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';
import { formatClassDate, loadPosts, postCategories, type ClassPost, type PostFile } from '../lib/classroom';

export default function Classroom() {
  const [posts, setPosts] = useState<ClassPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('전체');
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [fileUrls, setFileUrls] = useState<Record<string, string>>({});
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadError, setDownloadError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let active = true;
    loadPosts(true)
      .then((data) => { if (active) setPosts(data); })
      .catch(() => { if (active) setError('자료를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    const syncSelection = () => setSelectedId(new URLSearchParams(window.location.search).get('post'));
    syncSelection();
    window.addEventListener('popstate', syncSelection);
    return () => window.removeEventListener('popstate', syncSelection);
  }, []);

  const selected = posts.find((post) => post.id === selectedId);
  const visible = useMemo(() => posts.filter((post) => {
    const matchesCategory = category === '전체' || post.category === category;
    const needle = search.trim().toLocaleLowerCase('ko-KR');
    const matchesSearch = !needle || `${post.title} ${post.summary} ${post.course_name}`.toLocaleLowerCase('ko-KR').includes(needle);
    return matchesCategory && matchesSearch;
  }), [posts, category, search]);

  useEffect(() => {
    let active = true;
    setFileUrls({});
    if (!selected) return;
    Promise.all(selected.class_post_files.filter((file) => file.content_type.startsWith('image/')).map(async (file) => {
      const { data } = await supabase.storage.from('class-materials').createSignedUrl(file.storage_path, 3600);
      return [file.id, data?.signedUrl ?? ''] as const;
    })).then((entries) => { if (active) setFileUrls(Object.fromEntries(entries)); });
    return () => { active = false; };
  }, [selected?.id, posts]);

  function openPost(id: string | null) {
    const url = new URL(window.location.href);
    if (id) url.searchParams.set('post', id);
    else url.searchParams.delete('post');
    window.history.pushState({}, '', url);
    setSelectedId(id);
    setCopied(false);
    setDownloadError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function copyPostLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  async function downloadFile(file: PostFile) {
    if (downloadingId) return;
    setDownloadingId(file.id);
    setDownloadError('');
    try {
      const { data, error } = await supabase.storage
        .from('class-materials')
        .createSignedUrl(file.storage_path, 60);
      if (error || !data?.signedUrl) throw error ?? new Error('다운로드 주소를 만들지 못했습니다.');
      const response = await fetch(data.signedUrl);
      if (!response.ok) throw new Error('파일을 가져오지 못했습니다.');
      const blobUrl = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = file.filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(blobUrl), 10_000);
    } catch {
      setDownloadError('파일을 다운로드하지 못했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setDownloadingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-white text-brand-primary">
      <Navbar />
      <main className="pt-24 md:pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {selected ? (
            <article className="max-w-4xl mx-auto">
              <button type="button" onClick={() => openPost(null)} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary/70 hover:text-brand-accent cursor-pointer mb-8"><ArrowLeft size={17} /> 자료실</button>
              <div className="flex flex-wrap items-center gap-3 text-sm text-brand-primary/60 mb-4">
                <span className="font-bold text-brand-accent">{selected.category}</span>
                {selected.course_name && <span>{selected.course_name}</span>}
                {selected.class_date && <span>{formatClassDate(selected.class_date)}</span>}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">{selected.title}</h1>
              <p className="text-lg text-brand-primary/65 leading-relaxed mb-8">{selected.summary}</p>
              <div className="flex items-center gap-3 pb-8 border-b border-brand-primary/10">
                <button type="button" onClick={copyPostLink} className="inline-flex items-center gap-2 px-4 py-2 border border-brand-primary/15 rounded-md text-sm font-semibold hover:border-brand-accent hover:text-brand-accent cursor-pointer"><Link2 size={16} /> {copied ? '링크 복사됨' : '링크 복사'}</button>
                {selected.resource_url && <a href={selected.resource_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent text-white rounded-md text-sm font-semibold hover:opacity-90"><ArrowUpRight size={16} /> 관련 자료 열기</a>}
              </div>
              <div className="py-10 text-base leading-8 whitespace-pre-wrap break-words text-brand-primary/85">{selected.body}</div>
              {selected.class_post_files.length > 0 && (
                <section className="border-t border-brand-primary/10 pt-8" aria-label="첨부 자료">
                  <h2 className="text-xl font-bold mb-5">첨부 자료</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selected.class_post_files.map((file) => (
                      <button key={file.id} type="button" onClick={() => downloadFile(file)} disabled={downloadingId !== null} className="flex items-center gap-3 p-4 border border-brand-primary/10 rounded-md min-w-0 text-left hover:border-brand-accent hover:text-brand-accent disabled:opacity-50 disabled:cursor-wait cursor-pointer">
                        {file.content_type.startsWith('image/') ? <BookOpen size={20} /> : <FileText size={20} />}
                        <span className="truncate flex-1 text-sm font-medium">{downloadingId === file.id ? '다운로드 준비 중…' : file.filename}</span><Download size={17} />
                      </button>
                    ))}
                  </div>
                  {downloadError && <p role="alert" className="mt-4 text-sm text-red-600">{downloadError}</p>}
                  {selected.class_post_files.filter((file) => file.content_type.startsWith('image/') && fileUrls[file.id]).map((file) => <img key={file.id} src={fileUrls[file.id]} alt={`${selected.title} 수업 사진`} className="mt-6 w-full max-h-[600px] object-contain rounded-md bg-brand-bg-soft" />)}
                </section>
              )}
            </article>
          ) : selectedId && !loading ? (
            <div className="py-24 text-center"><h1 className="text-2xl font-bold mb-4">자료를 찾을 수 없습니다</h1><button type="button" onClick={() => openPost(null)} className="text-brand-accent font-semibold cursor-pointer">자료실로 돌아가기</button></div>
          ) : (
            <>
              <div className="border-b border-brand-primary/10 pb-10 mb-8">
                <p className="text-sm font-bold text-brand-accent mb-3">KION Labs Classroom</p>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">수업 자료실</h1>
                <p className="text-brand-primary/65 max-w-2xl leading-relaxed">출강과 실습에서 사용한 자료, 수업 기록, 공지를 한곳에서 확인하세요.</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div className="flex flex-wrap gap-2" role="group" aria-label="자료 분류">
                  {['전체', ...postCategories].map((item) => <button type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`px-4 py-2 text-sm font-semibold rounded-md cursor-pointer ${category === item ? 'bg-brand-primary text-white' : 'bg-brand-bg-soft text-brand-primary/70 hover:text-brand-primary'}`}>{item}</button>)}
                </div>
                <label className="relative block w-full md:w-64"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-primary/45" /><span className="sr-only">수업 자료 검색</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="수업이나 자료 검색" className="w-full border border-brand-primary/15 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:border-brand-accent" /></label>
              </div>
              {loading ? <p className="py-20 text-center text-brand-primary/55">자료를 불러오는 중입니다.</p> : error ? <p role="alert" className="py-20 text-center text-red-600">{error}</p> : visible.length === 0 ? <div className="py-24 text-center border-t border-brand-primary/10"><BookOpen size={32} className="mx-auto mb-4 text-brand-accent" /><p className="font-semibold">{posts.length === 0 ? '아직 공개된 수업 자료가 없습니다.' : '검색 결과가 없습니다.'}</p></div> : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {visible.map((post) => <button key={post.id} type="button" onClick={() => openPost(post.id)} className="text-left border border-brand-primary/10 rounded-md p-6 bg-white hover:border-brand-accent hover:shadow-sm transition-colors cursor-pointer flex flex-col min-h-56">
                    <div className="flex items-center justify-between gap-3 text-xs font-bold text-brand-accent mb-5"><span>{post.category}</span><ArrowUpRight size={18} /></div>
                    <h2 className="text-xl font-bold mb-3 leading-snug">{post.title}</h2>
                    <p className="text-sm leading-6 text-brand-primary/65 line-clamp-2 mb-6">{post.summary}</p>
                    <div className="mt-auto pt-4 border-t border-brand-primary/10 flex items-center justify-between gap-2 text-xs text-brand-primary/55"><span className="truncate">{post.course_name || 'KION Labs'}</span><span className="inline-flex items-center gap-1 shrink-0"><CalendarDays size={13} />{formatClassDate(post.class_date)}</span></div>
                  </button>)}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
