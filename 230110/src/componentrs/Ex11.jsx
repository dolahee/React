import React, { useState } from "react";

export default function Ex11() {
  let [num, setTeacher] = useState(0);
  return (
    <div>
      {" "}
      <span>{num}</span>
      <br />
      <button
        onClick={() => {
          setTeacher(num + 1);
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          setTeacher(num - 2);
        }}
      >
        -2
      </button>
    </div>
  );
}
