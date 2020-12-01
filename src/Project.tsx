import React, {useState} from "react";
import {useConfigureMenu} from "./ApplicationMenuContext";

export const Project = () => {
    const [menu] = useState<JSX.Element>(
        <ul>
            <li>Menu 6</li>
            <li>Menu 2</li>
        </ul>
    )

    useConfigureMenu(menu)

    return (
        <React.Fragment>
            Project Space
        </React.Fragment>
    )
}