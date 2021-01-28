import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';


// 훅스는 상태가 바뀔때마다 통채로 재실행 됨
const Gugudan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if(parseInt(value) === first * second) {
      setResult('정답' + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡!');
      setValue('');
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>{first} 곱하기 {second}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Gugudan />
    </div>
  );
}

export default App;