import React from 'react';
import './App.css';
import {Project} from "./Project";
import {Menu} from "./Menu";
import {Title} from "./Title";


function App() {
  return (
    <div className="App">
        <header className="App-header">
            <div className={"App-title"}><Title/></div>
            <div className={"App-menu"}><Menu/></div>
        </header>
        <div className={ "body" }>
            <Project/>
        </div>
    </div>
  );
}

export default App;
