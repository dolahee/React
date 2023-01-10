import React, { Component } from "react";

export default class ClassState extends Component {
  state = {
    teacher: "Hello World!",
  };
  render() {
    const { teacher } = this.state;
    return (
      <div>
        <span>{teacher}</span>
        <br />
        <button onClick={() => this.setState({ teacher: "Goodbye World!" })}>
          클릭!
        </button>
      </div>
    );
  }
}
