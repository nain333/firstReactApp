import logo from './logo.svg';
import './App.css';
import React from 'react';
var name="Himanshu Nain"

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="name">{name}</h1>
        
        
          {/* Edit <code>src/App.js</code> and save to reload. */}
          <p className="helloWorld">
            
          <h1>Hello World!
            <br></br>
            {new Date().toDateString()}
          </h1>
          {console.log("Hello World!")}
      
          </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </React.Fragment>
  );
}

export default App;
