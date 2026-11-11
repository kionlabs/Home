import { supabase } from './supabase';

export const postCategories = ['수업 기록', '수업 자료', '공지'] as const;
export type PostCategory = (typeof postCategories)[number];

export type PostFile = {
  id: string;
  post_id: string;
  storage_path: string;
  filename: string;
  content_type: string;
  size_bytes: number;
};

export type ClassPost = {
  id: string;
  title: string;
  summary: string;
  body: string;
  category: PostCategory;
  course_name: string;
  class_date: string | null;
  resource_url: string | null;
  published: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
  class_post_files: PostFile[];
};

export const postSelect = 'id,title,summary,body,category,course_name,class_date,resource_url,published,created_by,created_at,updated_at,class_post_files(id,post_id,storage_path,filename,content_type,size_bytes)';

export async function loadPosts(publishedOnly: boolean) {
  let query = supabase.from('class_posts').select(postSelect).order('created_at', { ascending: false });
  if (publishedOnly) query = query.eq('published', true);
  const { data, error } = await query;
  if (error) throw error;
  return (data ?? []) as ClassPost[];
}

export function formatClassDate(value: string | null) {
  if (!value) return '날짜 미정';
  return new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Seoul' }).format(new Date(`${value}T00:00:00+09:00`));
}
