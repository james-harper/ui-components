import React, { Component } from 'react';
import ButtonExample from './examples/button';
import HumanFriendlyTimeExample from './examples/human-friendly-time';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App pa3 ma3">
        <ButtonExample />
        <HumanFriendlyTimeExample />
      </div>
    );
  }
}

export default App;
