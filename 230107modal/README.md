<h1>๐Props</h1>
<p> ๋ถ๋ชจ ์ปดํฌ๋ํธ์์ ์์ ์ปดํฌ๋ํธ์ ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ๋ณด๋ด๋ ๋ฐฉ๋ฒ. Props๋ผ๋ ์ด๋ฆ์ ๊ฐ์ฒด๋ก ์ ๋ฌํ๋ค. </p>

```jsx
//componentrs์์ ํ์ผ ์์ฑํ ์ด๋ฐ ์์ผ๋ก ์ฌ์ฉํ๋ค.
import React from "react";

export default function MainHeader({ text }) {
  return <h1>{text}</h1>;
}

// App.js ์์ text ๊ฐ์ ๋ฐ๊พธ์ด ์ฌ๋ฌ๋ฒ ์ฌ์ฉ ๊ฐ๋ฅํ๋ค.
function App() {
  return (
    <div className="App">
      <MainHeader text="์๋, ํ๋กญ์ค ์ธ์" />
      <MainHeader text="์๋, ํ๋กญ์ค ์ธ์~~" />
      <List />
    </div>
  );
}
```

<h1>๐ props์ ํ์ฉ๋ฒ </h1>

```jsx
export default function MainHeader(props) {
  return (
    <div>
      <h1>{props.userID} ๋ ๋ฐ๊ฐ์ต๋๋ค!</h1>
      <a href={props.href}> {props.text} </a>
    </div>
  );
}

// ์ธ์
export default function MainHeader({ text, href, userID }) {
  return (
    <div>
      <h1>{userID} ๋ ๋ฐ๊ฐ์ต๋๋ค!</h1>
      <a href={href}> {text} </a>
    </div>
  );
}
//๋ณ์
export default function MainHeader(props) {
    const{text , href,userID} = props;
  return (
    <div>
      <h1>{userID} ๋ ๋ฐ๊ฐ์ต๋๋ค!</h1>
      <a href={href}> {text} </a>
    </div>
  );
}
```

<h1>โ๏ธClassProps ๋ฐฉ๋ฒ</h1>

```jsx
import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    const { text, href, userID } = this.props;
    return (
      <div>
        <h1>{userID} ๋ ๋ฐ๊ฐ์ต๋๋ค ClassProps </h1>
        <a href={href}> {text} </a>
      </div>
    );
  }
}
```
