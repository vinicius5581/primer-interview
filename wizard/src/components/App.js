import React, { Component } from 'react';
import Wizard from './Wizard';
import DoSomething from './DoSomething';
import DoSomethingElse from './DoSomethingElse';
import DoOneMoreThing from './DoOneMoreThing';
import './App.css';

const steps = [
  {id: 1, name: 'Do something', component: <DoSomething />},
  {id: 2, name: 'Do something else', component: <DoSomethingElse />},
  {id: 3, name: 'Do whatever', component: <DoOneMoreThing />, status: 'complete'},
  {id: 4, name: 'Do whatever', component: <DoOneMoreThing />},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wizard 
          steps={steps}
        />
      </div>
    );
  }
}

export default App;
