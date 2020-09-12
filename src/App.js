import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am react programmer</p>
        <Person name="joy" job="N/A"></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px'
  }
  return(
    <div style={personStyle}>
    <h1>Name:{props.name, props.job}</h1>
    <h3>Job:</h3>
    </div>
  ) 

}

export default App;
