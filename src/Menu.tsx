import React from "react";
import {useMenu} from "./ApplicationMenuContext";

export const Menu = () => {
    const menu = useMenu()
    return (
        <div>
            { menu }
        </div>
    )
}