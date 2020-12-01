import React, {useState} from 'react';
import './App.css';
import {Project} from "./Project";
import {Menu} from "./Menu";
import {Title} from "./Title";
import {ApplicationMenuContext} from "./ApplicationMenuContext"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {About} from './About';

function App() {
    const [menu, setMenu] = useState<JSX.Element>(<div>&nbsp;</div>)

    return (
        <BrowserRouter>
            <ApplicationMenuContext.Provider value={[menu, setMenu]}>
                <div className="App">
                    <header className="App-header">
                        <div className={"App-title"}><Title/></div>
                        <div className={"App-menu"}><Menu/></div>
                    </header>
                    <div className={"body"}>
                        <Switch>
                            <Route path={"/about"}>
                                <About/>
                            </Route>
                            <Route path={"/"}>
                                <Project/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </ApplicationMenuContext.Provider>
        </BrowserRouter>
    );
}

export default App;
