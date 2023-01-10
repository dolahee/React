import React, { Component } from "react";

export default class Ex9 extends Component {
  render() {
    return (
      <div>
        <h1>App 컴포넌트에서 넘겨준 text props 입니다.</h1>
        <button
          onClick={() => {
            console.log("콘솔 띄우기 성공");
          }}
        >
          콘솔 메시지
        </button>
      </div>
    );
  }
}
