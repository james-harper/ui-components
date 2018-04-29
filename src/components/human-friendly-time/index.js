import React, { Component } from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

class HumanFriendlyTime extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.time !== prevState.time) {
      return this.setState(HumanFriendlyTime.calucateDifference(nextProps.time));
    }

    return prevState;
  }

  static calucateDifference(time) {
    const isPast = time < new Date();
    const suffix = (isPast) ? 'ago' : 'from now';
    const distanceFromNow = `${distanceInWordsToNow(time)} ${suffix}`;
    return {
      time,
      distanceFromNow
    };
  }

  constructor(props) {
    super(props);

    this.state = HumanFriendlyTime.calucateDifference(this.props.time);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(HumanFriendlyTime.calucateDifference(this.props.time));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <span
        className="time-ago"
        data-timestamp={this.state.time}
      >
        {this.state.distanceFromNow}
      </span>
    );
  }
}

HumanFriendlyTime.propTypes = {
  time: PropTypes.instanceOf(Date)
};

HumanFriendlyTime.defaultProps = {
  time: new Date()
};

export default HumanFriendlyTime;
