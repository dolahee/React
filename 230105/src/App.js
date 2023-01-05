import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import ClassState from './components/ClassState';
import StateAndVariable from './components/StateAndVariable';
import ArrState from './components/ArrState';
import ObjState from './components/ObjState';

function App() {
  let [teacher, setTeacher] = useState('뽀로로');
  let srt = '';
  let [condition, setCondition] = useState(true);

  function customSetTeacher(name) {
    setTeacher(name);
    console.log(teacher);
  }

  return (
    <div className="App">
      <button onClick={() => customSetTeacher('Pororo')}>영어로!</button>
      <br />
      <span>{teacher}</span>
      <br />
      <h2>실습1</h2>
      <div>
        <Ex1 />
      </div>
      <div>
        <h2>컨디션</h2>
        <button onClick={() => setCondition(!condition)}>컨디션변경</button>
        <br></br>
        <span>{condition ? '👍' : '🤡'}</span>
      </div>
      <h2>실습2</h2>
      <div>
        <Ex2 />
      </div>
      <h2>클래스형 컴포넌트</h2>
      <ClassState />
      <h2>StateAndVariable</h2>
      <StateAndVariable />
      <h2>ArrState</h2>
      <ArrState />
      <h2>ObjState</h2>
      <ObjState />
    </div>
  );
}

export default App;
