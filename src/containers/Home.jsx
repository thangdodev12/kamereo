import * as React from 'react';
import * as redux from 'react-redux';
import map from 'lodash/map';

import Toast from '../commons/Toast';
import Header from '../components/Header';
import Infomation from '../components/Infomation';
import MegaMenu from '../components/MegaMenu';
import HomeStyle from './HomeStyle';

import { updateStoreProfile, getStores } from '../actions/HomeActions';


class Home extends React.PureComponent {
  componentDidMount() {
    this.props.getStores();
  }

  render() {
    const { updateStore, stores, loading, error } = this.props;

    return (
      <HomeStyle>
        <Header />
        <section className="body">
          <div className="left-block">
            <MegaMenu />
          </div>
          <div className="right-block">
            <h2 className="title">Store Infomations</h2>
            {map(stores, store => (
              <Infomation updateStore={updateStore} store={store} key={store.id} loading={loading} />
            ))}
          </div>
        </section>
        {loading && (
          <div className="loading">
            <div className="loader" />
          </div>
        )}
        <Toast type={error ? 'error' : 'success'}>
          {error ? 'Error !' : 'Success !'}
        </Toast>
      </HomeStyle>
    )
  }
}

const mapStateToProps = (state) =>  {
  return ({
    stores: state.HomeReducers.get('stores').toJS(),
    loading: state.HomeReducers.get('loading'),
    error: state.HomeReducers.get('error'),
});
}

const mapDispatchToProps = (dispatch) => ({
  updateStore: (body) => dispatch(updateStoreProfile(body)),
  getStores: () => dispatch(getStores()),
})

export default redux.connect(mapStateToProps, mapDispatchToProps)(Home);
