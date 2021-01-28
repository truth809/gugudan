import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

class Gugudan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result: '',
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    if(parseInt(this.state.value) === this.state.first * this.state.second) {
      this.setState((prevState) => {
        return {
          result: '정답: ' + prevState.value, //this.state.value를 간편하게
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
        }
      });
      this.input.focus();
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
    }
  };
  onChange = (e) => {
    this.setState({ value: e.target.value});
  };
  onRefInput = (c) => {this.input = c;};

  input;
  
  // setState를 할때마다 렌더 실행
  // 렌더를 많이하면 느려짐 주의
  // 렌더 안에 함수 밖으로 빼주기, 안빼주면 함수가 새로 계속 생기게됨
  render() {
    return (
      <>
        <div>{this.state.first} 곱하기 {this.state.second} 는?</div>
        <form onSubmit={this.onSubmit}>
          <input ref={this.onRefInput} type="number" value={this.state.value} onChange={this.onChange}></input>
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Gugudan />
    </div>
  );
}

export default App;