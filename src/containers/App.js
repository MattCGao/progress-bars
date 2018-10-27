import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchConfiguration } from '../actions';

import BarsContainer from './BarsContainer';
import BarSelectorContainer from './BarSelectorContainer';
import ButtonsContainer from './ButtonsContainer';

class App extends React.Component {
  componentDidMount() {
    const { fetchConfiguration } = this.props;

    if (fetchConfiguration) {
      fetchConfiguration();
    }
  }

  render() {
    return (
      <div style={{
        maxWidth: 400,
        margin: 'auto',
      }}
      >
        <header style={{ textAlign: 'center' }}>
          <h2>Progress Bar</h2>

          <h4>By Matt Gao</h4>
        </header>
        <BarsContainer />
        <div
          style={{
            margin: 15,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <BarSelectorContainer />
          <ButtonsContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchConfiguration: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchConfiguration: () => dispatch(fetchConfiguration()),
});

export default connect(null, mapDispatchToProps)(App);
