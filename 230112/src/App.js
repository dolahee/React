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

function App() {
  return (
    <div className="App">
      <Exconditional />
      <BrHr />
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
    </div>
  );
}

export default App;
