import React from "react";
import logo from "../logo.svg";
import styled, { keyframes } from "styled-components";

const MyDiv = styled.div`
  text-align: center;
`;
const MyHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const rotation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const MyLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotation} infinite 20s linear;
`;
const MyA = styled.p`
  color: #61dafb;
`;
export default function StyledApp() {
  return (
    <MyDiv>
      <MyHeader>
        <MyLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </MyHeader>
    </MyDiv>
  );
}
