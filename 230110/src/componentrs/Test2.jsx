import React, { Component } from "react";
import logo from "../logo.svg";

export default class Test2 extends Component {
  render() {
    const name = "박도희";
    const style = {
      color: "orange",
      marginTop: "20px",
      fontSize: "40px",
    };
    return (
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={logo}></img>
      </div>
    );
  }
}
