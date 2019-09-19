import { fromJS } from 'immutable';

import { HOME_CONSTANTS } from '../constants';

const initialStore = fromJS({
  stores: [],
  error: null,
  loading: false,
});

const HomeReducers = (store = initialStore, action) => {
  switch(action.type) {
    case HOME_CONSTANTS.UPDATE_STORE_PROFILE:
      return store.set('error', null)
        .set('loading', true);
    case HOME_CONSTANTS.UPDATE_STORE_PROFILE_SUCCESS:
      return store.set('stores', store.get('stores')
        .map(st => st.get('id') === action.res.store.id ? fromJS(action.res.store) : st))
        .set('error', null)
        .set('loading', false);
    case HOME_CONSTANTS.UPDATE_STORE_PROFILE_ERROR:
      return store.set('error', fromJS(action.error))
        .set('loading', false);
    case HOME_CONSTANTS.GET_STORES:
      return store.set('loading', true)
        .set('error', null);
    case HOME_CONSTANTS.GET_STORES_SUCCESS:
      return store.set('stores', fromJS(action.stores))
        .set('loading', false);
    case HOME_CONSTANTS.GET_STORES_ERROR:
      return store.set('error', fromJS(action.error))
        .set('loading', false);
    default: return store;
  }
}

export default HomeReducers;