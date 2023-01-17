import "./App.css";
import StyledApp from "./components/StyledApp";
import InlineCss from "./components/InlineCss";
import TestCss from "./components/TestCss";
import TestStyled from "./components/TestStyled";
import UseEffectFetch from "./components/UseEffectFetch";
import Image from "./components/Image";
import FancyBorder from "./components/FancyBorder";

function App() {
  return (
    <div className="App">
      <FancyBorder color="orange">
        <Image />
      </FancyBorder>
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
