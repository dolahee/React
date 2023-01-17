import "./App.css";
import InlineCss from "./components/InlineCss";
import TestCss from "./components/TestCss";
import TestStyled from "./components/TestStyled";
import UseEffectFetch from "./components/UseEffectFetch";

function App() {
  return (
    <div className="App">
      <TestStyled />
      <TestCss />
      <InlineCss />
      <UseEffectFetch />
    </div>
  );
}

export default App;
