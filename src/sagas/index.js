import { all, takeLatest } from "redux-saga/effects";

import { HOME_CONSTANTS } from '../constants';
import { updateStoreProfile, getStores } from './HomeSaga';

export function* mainSaga() {
  yield all([
    takeLatest(HOME_CONSTANTS.GET_STORES, getStores),
    takeLatest(HOME_CONSTANTS.UPDATE_STORE_PROFILE, updateStoreProfile),
  ]);
}