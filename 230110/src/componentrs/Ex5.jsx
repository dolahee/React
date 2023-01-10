import React from "react";

export default function Ex5() {
  const test = { backgroundColor: "bisque", color: "orange", margin: "20px" };

  return (
    <div>
      <h1 style={test}>Hello World</h1>
      아이디: <input style={{ margin: "20px" }}></input> <br />
      비밀번호: <input style={{ margin: "20px" }}></input>
    </div>
  );
}
