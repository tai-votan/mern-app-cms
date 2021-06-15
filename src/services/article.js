import request from '@/utils/request';

export async function fetchArticle() {
  return request(`/api/post`);
}

export async function fetchArticleBySlug(params) {
  return request(`/api/post/${params.slug}`);
}
