import "./App.css";
import BrHr from "./componentrs/BrHr";
import ChangeFocus from "./componentrs/ChangeFocus";
import Comparing from "./componentrs/Comparing";
import Ex1 from "./componentrs/Ex1";
import Ex2 from "./componentrs/Ex2";
import RefDOM from "./componentrs/RefDOM";
import TestRef from "./componentrs/TestRef";

function App() {
  return (
    <div className="App">
      <TestRef />
      <BrHr />
      <ChangeFocus />
      <BrHr />
      <RefDOM />
      <BrHr />
      <Ex1 />
      <BrHr />
      <Ex2 />
      <BrHr />
      <Comparing />
    </div>
  );
}

export default App;
