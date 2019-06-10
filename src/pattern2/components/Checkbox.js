import React from "react";

export default class Checkbox extends React.Component {
  state = {
    on: false
  };
  toggle = () => {
    this.setState(({ on }) => ({ on: !on }));
  };
  render() {
    const { on } = this.state;
    return this.props.children({ on, toggle: this.toggle });
  }
}
