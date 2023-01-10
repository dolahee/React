import React, { useState } from "react";

export default function Ex13() {
  const [name, setName] = useState("");
  const [setme, setMe] = useState(":");
  const [email, setEamil] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue2] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = (event) => {
    setName(inputValue);
    setEamil(inputValue1);
  };
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const resetName = () => {
    setName("");
    setEamil("");
    setMe("");
  };
  return (
    <div>
      <input onChange={handleChange} />
      <input onChange={handleChange2} />
      <button onClick={handleClick}>등록</button>
      <h1>
        코디: codi@gmail.com <br />
        윤소희: yoonsohee@gmail.com
        <br />
      </h1>
      <h1 onClick={resetName}>
        {name}
        {setme}
        {email}
      </h1>
    </div>
  );
}
