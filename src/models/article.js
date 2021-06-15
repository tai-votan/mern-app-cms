import { fetchArticle, fetchArticleBySlug } from '@/services/article';

const Model = {
  namespace: 'article',
  state: {
    articles: [],
    articleDetails: {},
  },
  effects: {
    *fetchArticle({ payload }, { call, put }) {
      const { data } = yield call(fetchArticle, payload);
      yield put({
        type: 'save',
        payload: {
          articles: data.posts || [],
        },
      }); // Login successfully
    },
    *fetchArticleBySlug({ payload }, { call, put }) {
      const { data } = yield call(fetchArticleBySlug, payload);
      yield put({
        type: 'save',
        payload: {
          articleDetails: data.articleDetails || {},
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
