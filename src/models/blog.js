import { fetchBlog } from '@/services/blog';

const Model = {
  namespace: 'blog',
  state: {
    blogs: [],
  },
  effects: {
    *fetchBlog({ payload }, { call, put }) {
      const response = yield call(fetchBlog, payload);
      yield put({
        type: 'save',
        payload: {
          blogs: response || [],
        },
      }); // Login successfully
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default Model;
