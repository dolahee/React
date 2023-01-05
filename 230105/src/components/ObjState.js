import React, { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: '박도희' });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          state.teacher = 'dohee';
          const copyObj = { ...state };

          setState(copyObj);
          console.log(state);
        }}
      >
        영어로
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
