import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
        <Person age="20" name="Stephen"/>
        <Person name='Eldin' age='24' >"I love exercising"</Person>
        {/* <Person />  */}
      </div>
    );

    // return React.createElement('div', { className:'App'}, React.createElement('h1', null, "Heyooooooooooooooo"))
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
