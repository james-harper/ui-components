import React, { Component } from 'react';
import HumanFriendlyTime from '../../components/human-friendly-time';

class HumanFriendlyTimeExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: [
        new Date(),
        new Date('2018-04-13'),
        new Date('2017-12-25'),
        new Date('2018-12-09'),
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Human Friendly Time example</h1>
        <ul>
          {this.state.dates.map(date => (
            <li key={date.toDateString()}>
              {date.toDateString()} = <HumanFriendlyTime time={date} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HumanFriendlyTimeExample;
