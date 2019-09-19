import { createSelector } from 'reselect';

const selectList = (state) => state.get('list');

const makeSelectList = () => createSelector(
  selectList,
  list => list.toJS(),
);

export default makeSelectList;