import React, { Component } from "react";
import Switch from "./switch";

export default class Toggle extends Component {
  state = {
    on: false
  };

  onChange = () => {
    this.setState(({ on }) => ({ on: !on }));
  };

  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (on ? null : children);
  static Checkbox = ({ on, onChange }) => (
    <Switch on={on} onChange={onChange} />
  );

  render() {
    const { children } = this.props;
    const { on } = this.state;
    return React.Children.map(children, child =>
      React.cloneElement(child, { on, onChange: this.onChange })
    );
  }
}
