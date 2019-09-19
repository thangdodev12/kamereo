import { put, call } from 'redux-saga/effects';

import { updateStoreService, getStoresService } from '../Services/api';
import { 
  updateStoreProfileSuccess,
  updateStoreProfileError,
  getStoresSuccess,
  getStoresError,
} from '../actions/HomeActions';

export function* updateStoreProfile({ body }) {
  try {
    const data = yield call(updateStoreService, body);
    yield put(updateStoreProfileSuccess(data));
  } catch (e) {
    yield put(updateStoreProfileError(e));
  }
}

export function* getStores() {
  try {
    const data = yield call(getStoresService);
    yield put(getStoresSuccess(data));
  } catch (e) {
    yield put(getStoresError(e));
  }
}
