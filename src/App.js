import React, { Component } from 'react';
import './App.css';
import Aux from './hoc/Auxiliary';
import PlayerArea from './components/PlayerArea/PlayerArea';

class App extends Component {
  render() {
    return (
      <Aux>
        <div className="App">
          <PlayerArea />
        </div>
      </Aux>
    );
  }
}

export default App;
