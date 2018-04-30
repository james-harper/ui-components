import React, { Component } from 'react';
import Button from '../../components/button';

class ButtonExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: 0,
      info: 0,
      danger: 0,
      warning: 0,
      gray: 0,
      default: 0
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(type) {
    this.setState((prevState) => {
      const newState = prevState;
      newState[type] += 1;
      return newState;
    });
  }

  render() {
    const MyButton = ({ type }) => (
      <div className="ma1">
        <Button size="medium" type={type} onClick={() => this.onClick(type)}>{type}</Button>
        <span className="pl2">Clicked: {this.state[type]}</span>
      </div>
    );
    return (
      <div>
        <h1>Button example:</h1>
        <MyButton type="success" />
        <MyButton type="info" />
        <MyButton type="warning" />
        <MyButton type="danger" />
        <MyButton type="gray" />
        <MyButton type="default" />
      </div>
    );
  }
}

export default ButtonExample;
