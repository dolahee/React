import React, { useState } from 'react';

export default function Ex2() {
  let [num, setTeacher] = useState(0);
  return (
    <div>
      <span>{num}</span>
      <br />
      <button style={{ fontSize: '32px' }} onClick={() => setTeacher(num + 1)}>
        {num <= 10 ? '👍' : num <= 20 ? '🤡' : num <= 30 ? '🤓' : '🎁'}
      </button>
    </div>
  );
}
