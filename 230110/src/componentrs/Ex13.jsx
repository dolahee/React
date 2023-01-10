import React, { useState } from "react";

export default function Ex13() {
  const [users, setUsers] = useState([
    { name: "코디", coma: ":", email: "codi@gmail.com" },
    { name: "윤소희", coma: ":", email: "codi@gmail.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleClick = (event) => {
    setUsers((prev) => {
      const newUsers = [...prev];
      newUsers.push({ name, email });
      return newUsers;
    });
  };
  const resetName = () => {};
  return (
    <div>
      <input placeholder="이름을 입력하세요" onChange={handleChangeName} />
      <input placeholder="이메일을 입력하세요" onChange={handleChangeEmail} />
      <button onClick={handleClick}>등록</button>

      <h1 onClick={resetName}>
        {users.map((el, index) => {
          return (
            <div key={index}>
              <h5>
                {el.name}
                {el.coma}
                {el.email}
              </h5>
            </div>
          );
        })}
      </h1>
    </div>
  );
}
