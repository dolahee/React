import "./App.css";
import CallCustomList from "./componentrs/CallCustomList";
import CallCustomObj from "./componentrs/CallCustomObj";
import ChangeObj from "./componentrs/ChangeObj";
import ClassProps from "./componentrs/ClassProps";
import Ex5 from "./componentrs/Ex5";
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
      <CallCustomList />
      <CallCustomObj />
      <Ex5 />
    </div>
  );
}

export default App;
