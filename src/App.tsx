import React, {useState} from 'react';
import './App.css';
import {Project} from "./Project";
import {Menu} from "./Menu";
import {Title} from "./Title";
import {ApplicationMenuContext} from "./ApplicationMenuContext"

function App() {
    const [menu, setMenu] = useState<JSX.Element>(<div>&nbsp;</div>)

    return (
        <ApplicationMenuContext.Provider value={[menu, setMenu]}>
            <div className="App">
                <header className="App-header">
                    <div className={"App-title"}><Title/></div>
                    <div className={"App-menu"}><Menu/></div>
                </header>
                <div className={"body"}>
                    <Project/>
                </div>
            </div>
        </ApplicationMenuContext.Provider>
    );
}

export default App;
