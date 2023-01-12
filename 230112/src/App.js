import "./App.css";
import BrHr from "./componentrs/BrHr";
import ChangeFocus from "./componentrs/ChangeFocus";
import Comparing from "./componentrs/Comparing";
import ConditionalRender from "./componentrs/ConditionalRender";
import Ex1 from "./componentrs/Ex1";
import Ex2 from "./componentrs/Ex2";
import ReactFragment from "./componentrs/ReactFragment";
import RefDOM from "./componentrs/RefDOM";
import TestRef from "./componentrs/TestRef";
import Exconditional from "./componentrs/Exconditional";
import TestUseEffect from "./componentrs/TestUseEffect";
import Timer from "./componentrs/Timer";
import ShowTimer from "./componentrs/ShowTimer";
import ExUnmount from "./componentrs/ExUnmount";

function App() {
  return (
    <div className="App">
      <ExUnmount />
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
      <BrHr />
      <ReactFragment />
      <BrHr />
      <ConditionalRender />
      <BrHr />
      <Exconditional />
      <BrHr />
      <TestUseEffect />
      <BrHr />
      <ShowTimer />
    </div>
  );
}

export default App;
