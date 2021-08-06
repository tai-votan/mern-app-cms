import { fetchBlog, createBlog, fetchBlogDetails } from '@/services/blog';
import { history } from 'umi';
import routesPath from '@/../config/routesPath';

const Model = {
  namespace: 'blog',
  state: {
    blogs: [],
    blogDetails: {},
  },
  effects: {
    *fetchBlog({ payload }, { call, put }) {
      const response = yield call(fetchBlog, payload);
      yield put({
        type: 'save',
        payload: {
          blogs: response.data?.categories || [],
        },
      });
    },
    *createBlog({ payload }, { call }) {
      const { data } = yield call(createBlog, payload);
      history.replace(`${routesPath.BLOGS}/${data.slug}`);
    },
    *fetchBlogDetails({ payload }, { call, put }) {
      const { data } = yield call(fetchBlogDetails, payload);
      yield put({
        type: 'save',
        payload: {
          blogDetails: data?.category || {},
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default Model;
