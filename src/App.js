import React, { Component } from 'react';
import './App.css';
import Aux from './hoc/Auxiliary';
import DuelCalculator from './containers/DuelCalculator/DuelCalculator';
class App extends Component {
  render() {
    return (
      <Aux>
        <div className="App">
          <DuelCalculator />
        </div>
      </Aux>
    );
  }
}

export default App;
