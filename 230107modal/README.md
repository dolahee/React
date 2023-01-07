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
