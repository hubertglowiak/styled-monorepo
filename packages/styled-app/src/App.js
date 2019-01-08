import React, { Component } from 'react';
import { ExampleComponent1, ExampleComponent2} from 'styled-layout';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ExampleComponent1/>
       <ExampleComponent2/>
      </div>
    );
  }
}

export default App;
