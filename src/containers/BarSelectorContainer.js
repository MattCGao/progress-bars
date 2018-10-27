import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeSelectedBar } from '../actions';
import BarSelector from '../components/BarSelector';

class BarSelectorContainer extends React.Component {
  render() {
    const { bars, changeSelectedBar } = this.props;

    return (
      <div>
        <BarSelector
          bars={bars}
          onChange={changeSelectedBar}
        />
      </div>
    );
  }
}

BarSelectorContainer.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeSelectedBar: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bars: state.progressBars.barValues,
});

const mapDispatchToProps = dispatch => ({
  changeSelectedBar: selectedBarIndex => dispatch(changeSelectedBar(selectedBarIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarSelectorContainer);
