import { HOME_CONSTANTS } from '../constants';

export const updateStoreProfile = (body) => ({
  type: HOME_CONSTANTS.UPDATE_STORE_PROFILE,
  body,
});

export const updateStoreProfileSuccess = (res) => ({
  type: HOME_CONSTANTS.UPDATE_STORE_PROFILE_SUCCESS,
  res,
});

export const updateStoreProfileError = (error) => ({
  type: HOME_CONSTANTS.UPDATE_STORE_PROFILE_ERROR,
  error,
});

export const getStores = () => ({
  type: HOME_CONSTANTS.GET_STORES,
})

export const getStoresSuccess = (stores) => ({
  type: HOME_CONSTANTS.GET_STORES_SUCCESS,
  stores,
})

export const getStoresError = (error) => ({
  type: HOME_CONSTANTS.GET_STORES_ERROR,
  error,
})
