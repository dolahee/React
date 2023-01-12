import React from "react";
import { useRef } from "react";

export default function RefDOM() {
  const orangeEl = useRef();
  const skyblueEl = useRef();
  const inputEl = useRef();

  const adjustCss = () => {
    orangeEl.current.style.backgroundColor = "orange";
    skyblueEl.current.style.backgroundColor = "skyblue";
  };
  const clearInput = () => {
    inputEl.current.value = "";
  };
  return (
    <div>
      <h1 ref={orangeEl}>오렌지</h1>
      <h1 ref={skyblueEl}>스카이블루</h1>
      <input ref={inputEl} />
      <br />
      <br />
      <button onClick={adjustCss}>css 적용하기</button>
      <button onClick={clearInput}>인풋 초기화</button>
    </div>
  );
}
