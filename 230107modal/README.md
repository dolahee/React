<h1>🔍Props</h1>
<p> 부모 컴포넌트에서 자식 컴포넌트에 원하는 데이터를 보내는 방법. Props라는 이름의 객체로 전달한다. </p>

```jsx
//componentrs에서 파일 생성후 이런 식으로 사용한다.
import React from "react";

export default function MainHeader({ text }) {
  return <h1>{text}</h1>;
}

// App.js 에서 text 값을 바꾸어 여러번 사용 가능하다.
function App() {
  return (
    <div className="App">
      <MainHeader text="안녕, 프롭스 세상" />
      <MainHeader text="안녕, 프롭스 세상~~" />
      <List />
    </div>
  );
}
```

<h1>👍 props의 활용법 </h1>

```jsx
export default function MainHeader(props) {
  return (
    <div>
      <h1>{props.userID} 님 반갑습니다!</h1>
      <a href={props.href}> {props.text} </a>
    </div>
  );
}

// 인자
export default function MainHeader({ text, href, userID }) {
  return (
    <div>
      <h1>{userID} 님 반갑습니다!</h1>
      <a href={href}> {text} </a>
    </div>
  );
}
//변수
export default function MainHeader(props) {
    const{text , href,userID} = props;
  return (
    <div>
      <h1>{userID} 님 반갑습니다!</h1>
      <a href={href}> {text} </a>
    </div>
  );
}
```

<h1>☝️ClassProps 방법</h1>

```jsx
import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    const { text, href, userID } = this.props;
    return (
      <div>
        <h1>{userID} 님 반갑습니다 ClassProps </h1>
        <a href={href}> {text} </a>
      </div>
    );
  }
}
```
