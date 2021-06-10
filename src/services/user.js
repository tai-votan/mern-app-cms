import request from '@/utils/request';

export async function query(params) {
  return request(`/api/user/${params.email}`);
}
export async function queryCurrent() {
  return request('/api/user/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}
