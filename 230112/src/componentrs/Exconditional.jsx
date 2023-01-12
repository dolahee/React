import React from "react";
import { useState } from "react";
import PracticeOne from "./PracticeOne";

export default function ConditionalRender() {
  const [condition, setCondition] = useState("1번");
  const onChange = () => {
    condition === "1번" ? setCondition("2번") : setCondition("1번");
  };

  return (
    <>
      {condition === "1번" ? (
        <PracticeOne num="1번" />
      ) : (
        <PracticeOne num="2번" />
      )}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
