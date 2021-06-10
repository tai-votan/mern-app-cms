import { fetchPage } from '@/services/page';

const Model = {
  namespace: 'page',
  state: {
    pages: [],
  },
  effects: {
    *fetchPage({ payload }, { call, put }) {
      const response = yield call(fetchPage, payload);
      yield put({
        type: 'save',
        payload: {
          pages: response || [],
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
