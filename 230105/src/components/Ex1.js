import React, { useState } from 'react';

export default function Ex1() {
  let [num, setTeacher] = useState(0);

  return (
    <div>
      <span>{num}</span>
      <br />
      <button
        onClick={() => {
          setTeacher(num - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setTeacher(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
