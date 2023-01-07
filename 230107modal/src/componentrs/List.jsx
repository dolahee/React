import React from "react";
import ListChild from "./ListChild";
import Modal from "./Modal";

export default function List() {
  return (
    <div>
      <h1>오늘 해야 할 일</h1>
      <hr />
      <Modal />
      <ListChild h2="리액트 공부하기" p="state 활용법 익히기" />
      <ListChild h2="코테 문제풀기" p="👍Lv 0 정복 가즈아" />
      <Modal />
    </div>
  );
}
