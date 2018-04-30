import React, { Component } from 'react';
import PropTypes from 'prop-types';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

class HumanFriendlyTime extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.time !== prevState.time) {
      return this.setState(HumanFriendlyTime.calculateDifference(nextProps.time));
    }

    return prevState;
  }

  static calculateDifference(time) {
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

    this.state = HumanFriendlyTime.calculateDifference(this.props.time);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(HumanFriendlyTime.calculateDifference(this.props.time));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <span
        className="time-difference-from-now"
        data-timestamp={this.state.time.toISOString()}
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
