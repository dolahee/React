import React from "react";

export default function CustomList(props) {
  return (
    <ul>
      {props.arr?.map((el, index) => (
        <div key={el}>
          <li>{el}</li>
        </div>
      ))}
    </ul>
  );
}
