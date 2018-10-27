import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import PropTypes from 'prop-types';

import reducers from './reducers';

class Root extends React.Component {
  constructor(props) {
    super(props);

    const { initialState } = props;

    this.store = createStore(
      reducers,
      initialState,
      applyMiddleware(reduxPromise),
    );
  }

  render() {
    const { children } = this.props;
    return (
      <Provider store={this.store}>
        {children}
      </Provider>
    );
  }
}

Root.propTypes = {
  children: PropTypes.any.isRequired,
  initialState: PropTypes.any,
};

Root.defaultProps = {
  initialState: {},
};

export default Root;
