import React from "react";
import ListChild from "./ListChild";
import Modal from "./Modal";
import ItemList from "./ItemList";
import ChangeObj from "./ChangeObj";

export default function List() {
  const dataArr = [
    { title: "리액트 공부하기", constent: "teate 활용법 익히기" },
    { title: "코테 문제 풀기", constent: "Lv 0 정복하기" },
    { title: "집에가기", constent: "집에가기" },
  ];
  return (
    <div>
      <h1>오늘 해야 할 일</h1>
      <hr />
      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el.title}</h2>
            <p>{el.constent}</p>
            <hr />
          </div>
        );
      })}
      <ItemList />
    </div>
  );
}
