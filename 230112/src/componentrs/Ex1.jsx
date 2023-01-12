import React from "react";
import { useRef } from "react";

export default function Ex1() {
  const color = useRef();
  const inputColor = useRef();

  const divCss = () => {
    color.current.style.backgroundColor = inputColor.current.value;
  };
  return (
    <div ref={color}>
      <input ref={inputColor} />
      <br />
      <br />
      <button onClick={divCss}>색 적용</button>
    </div>
  );
}
