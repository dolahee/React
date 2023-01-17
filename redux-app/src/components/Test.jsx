import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Test() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>당신의 몸무게는 : {weight} 입니다.</h1>
      <button
        onClick={() => {
          dispatch({ type: "up" });
        }}
      >
        up
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down" });
        }}
      >
        down
      </button>
    </>
  );
}
