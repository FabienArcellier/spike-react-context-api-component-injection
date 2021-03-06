import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useConfigureMenu} from "./ApplicationMenuContext";

export const Project = () => {
    const [menu] = useState<JSX.Element>(
        <ul>
            <li><Link to={"/about"}>About</Link></li>
        </ul>
    )

    useConfigureMenu(menu)

    return (
        <React.Fragment>
            Project Space
        </React.Fragment>
    )
}