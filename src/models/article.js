import { fetchArticle } from '@/services/article';

const Model = {
  namespace: 'article',
  state: {
    articles: [],
  },
  effects: {
    *fetchArticle({ payload }, { call, put }) {
      const response = yield call(fetchArticle, payload);
      yield put({
        type: 'save',
        payload: {
          articles: response || [],
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
