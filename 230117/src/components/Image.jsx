import React from "react";
import lostArkImg from "../img.png";

export default function Image() {
  return (
    <>
      <img src="/images/img.png" alt="로아이미지" />
      <img src={lostArkImg} alt="로아이미지" />;
    </>
  );
}
