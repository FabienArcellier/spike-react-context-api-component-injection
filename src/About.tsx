import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useConfigureMenu} from "./ApplicationMenuContext";

export const About = () => {
    const [menu] = useState<JSX.Element>(
        <ul>
            <li><Link to="/">Project</Link></li>
        </ul>
    )

    useConfigureMenu(menu)

    return (
        <React.Fragment>
            About space
        </React.Fragment>
    )
}