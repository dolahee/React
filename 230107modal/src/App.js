import "./App.css";
import ClassProps from "./componentrs/ClassProps";
import List from "./componentrs/List";
import MainHeader from "./componentrs/MainHeader";

function App() {
  return (
    <div className="App">
      <MainHeader
        text="네이버로 이동"
        href="https://www.naver.com/"
        userID="도희"
      />
      <ClassProps
        text="네이버로 이동"
        href="https://www.naver.com/"
        userID="도희"
      />
      <List />
    </div>
  );
}

export default App;
