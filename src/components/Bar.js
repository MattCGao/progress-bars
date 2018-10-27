import React from 'react';
import PropTypes from 'prop-types';

class Bar extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { value } = this.props;
    if (nextProps.value === value) {
      return false;
    }

    return true;
  }

  render() {
    const { value, limit } = this.props;
    const barWidth = (value >= limit) ? 100 : Math.floor((value / limit) * 100);
    const barColor = (value > limit) ? '#F82400' : '#B2D7E6';

    return (
      <div
        className="bar-box"
        style={{
          maxWidth: 400,
          border: '1px solid #666666',
          margin: 15,
        }}
      >
        <div
          className="bar"
          style={{
            width: `${barWidth}%`,
            background: `${barColor}`,
            height: 22,
            textAlign: 'center',
            transform: 'translateX(0px)',
            transition: 'width 2s',
          }}
        >
          <span
            style={{
              color: 'white',
              lineHeight: '22px',
            }}
          >
            {`${value}%`}
          </span>
        </div>
      </div>
    );
  }
}

Bar.propTypes = {
  value: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default Bar;
