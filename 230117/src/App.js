import "./App.css";
import StyledApp from "./components/StyledApp";
import InlineCss from "./components/InlineCss";
import TestCss from "./components/TestCss";
import TestStyled from "./components/TestStyled";
import UseEffectFetch from "./components/UseEffectFetch";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <Image />
      <StyledApp />
      <TestStyled />
      <TestCss />
      <InlineCss />
      <UseEffectFetch />
    </div>
  );
}

export default App;
