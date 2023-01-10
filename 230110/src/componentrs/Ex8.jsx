import React from "react";
import immg from "../실어.png";

export default function Ex8() {
  const style = {
    backgroundColor: "bisque",
  };
  return (
    <div style={style}>
      <h1>이번 주 베스트 셀러</h1>
      <img src={immg}></img>
      <h2>실어증입니다. 일하기 싫어증</h2>
      <p>저자:양경수</p>
      <p>판매가:14,220원</p>
      <p>구분:에세이</p>
    </div>
  );
}
