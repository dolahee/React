import "./App.css";
import BrHr from "./componentrs/BrHr";
import ChangeFocus from "./componentrs/ChangeFocus";
import Ex1 from "./componentrs/Ex1";
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
    </div>
  );
}

export default App;
