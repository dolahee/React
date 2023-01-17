import "./App.css";
import StyledApp from "./components/StyledApp";
import InlineCss from "./components/InlineCss";
import TestCss from "./components/TestCss";
import TestStyled from "./components/TestStyled";
import UseEffectFetch from "./components/UseEffectFetch";
import Image from "./components/Image";
import FancyBorder from "./components/FancyBorder";
import Profile from "./components/Profile";
import Board from "./components/Board";
import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/board" element={<Board />}></Route>
      </Routes>
    </div>
  );
}

export default App;
