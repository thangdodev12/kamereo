import React from 'react';
import Toast from '../commons/Toast';

const HOCToast = (Component) => {
  return class extends React.PureComponent {
    state = {
      isOpen: false,
    };

    componentWillReceiveProps(nextProps) {
      const { loading } = this.props;
      if (loading && loading !== nextProps.loading) {
        this.toggleToast();
      }
    }

    toggleToast = () => {
      this.setState({ isOpen: !this.state.isOpen });
    } 

    render() {
      const  { error } = this.props;

      return (
        <>
          <Component {...this.props}/>
          <Toast type={error ? 'error' : 'success'} isOpen={this.state.isOpen} toggleToast={this.toggleToast}>
            {error ? 'Error !' : 'Success !'}
          </Toast>
        </>
      );
    }
  }
}

export default HOCToast;
