import request from '@/utils/request';

export async function fetchBlog() {
  return request('/api/category');
}

export async function createBlog(params) {
  return request('/api/category', {
    method: 'POST',
    data: params,
  });
}

export async function fetchBlogDetails(params) {
  return request(`/api/category/${params.slug}`);
}
