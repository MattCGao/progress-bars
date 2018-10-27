import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Bar from '../components/Bar';


class BarsContainer extends React.Component {
  render() {
    const { barValues, limit } = this.props;

    return (
      <div>
        {
          barValues.map(value => (
            <React.Fragment key={shortid.generate()}>
              <Bar
                value={value}
                limit={limit}
              />
            </React.Fragment>
          ))
        }
      </div>
    );
  }
}

BarsContainer.propTypes = {
  barValues: PropTypes.arrayOf(PropTypes.number),
  limit: PropTypes.number,
};

BarsContainer.defaultProps = {
  barValues: [],
  limit: 0,
};

const mapStateToProps = state => ({
  barValues: state.progressBars.barValues,
  limit: state.progressBars.limit,
});

export default connect(mapStateToProps, null)(BarsContainer);
