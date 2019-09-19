import { fromJS } from 'immutable';
import reducer from '../HomeReducer';
import { HOME_CONSTANTS } from '../../constants';

const initialStore = fromJS({
  stores: [],
  error: undefined,
  loading: false,
});

describe('HomeReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialStore, {})).toEqual(initialStore);
  });

  it('should handle UPDATE_STORE_PROFILE', () => {
    const expectResult = fromJS({
      stores: [],
      error: null,
      loading: true,
    });
    expect(reducer(initialStore, { type: HOME_CONSTANTS.UPDATE_STORE_PROFILE })).toEqual(expectResult);
  });

  it('should handle UPDATE_STORE_PROFILE_SUCCESS', () => {
    const initStore = fromJS({
      stores: [{ id: 1 }],
      error: undefined,
      loading: false,
    });

    const expectResult = fromJS({
      stores: [{ id: 1 }],
      error: null,
      loading: false,
    });
    expect(reducer(initStore, { type: HOME_CONSTANTS.UPDATE_STORE_PROFILE_SUCCESS, res: { store: { id: 1 } }})).toEqual(expectResult);
  });

  it('should handle UPDATE_STORE_PROFILE_ERROR', () => {
    const expectResult = fromJS({
      stores: [],
      error: { message: '' },
      loading: false,
    });
    expect(reducer(initialStore, { type: HOME_CONSTANTS.UPDATE_STORE_PROFILE_ERROR, error: { message: '' } })).toEqual(expectResult);
  });

  it('should handle GET_STORES', () => {
    const expectResult = fromJS({
      stores: [],
      error: null,
      loading: true,
    });
    expect(reducer(initialStore, { type: HOME_CONSTANTS.GET_STORES })).toEqual(expectResult);
  });

  it('should handle GET_STORES_SUCCESS', () => {
    const expectResult = fromJS({
      stores: [{ id: 1 }],
      error: undefined,
      loading: false,
    });
    expect(reducer(initialStore, { type: HOME_CONSTANTS.GET_STORES_SUCCESS, stores: [{ id: 1 }] })).toEqual(expectResult);
  });

  it('should handle GET_STORES_ERROR', () => {
    const expectResult = fromJS({
      stores: [],
      error: { message: '' },
      loading: false,
    });
    expect(reducer(initialStore, { type: HOME_CONSTANTS.GET_STORES_ERROR, error: { message: '' } })).toEqual(expectResult);
  });
});