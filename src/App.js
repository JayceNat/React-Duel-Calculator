import React, { Component } from 'react';
import classes from './App.module.css';
import DuelCalculator from './containers/DuelCalculator/DuelCalculator';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <DuelCalculator />
      </div>
    );
  }
}

export default App;
