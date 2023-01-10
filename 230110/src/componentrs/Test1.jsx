import React, { Component } from "react";

export default class Test1 extends Component {
  render() {
    const name = "박도희";
    const myStyle = {
      backgroundColor: "blue",
      color: "orange",
      padding: "12px",
      fontSize: "40px",
    };
    return <div style={myStyle}>{name}</div>;
  }
}
