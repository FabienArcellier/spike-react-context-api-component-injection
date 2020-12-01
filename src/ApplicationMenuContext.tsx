import React from "react";

export const ApplicationMenuContext = React.createContext<[JSX.Element, React.Dispatch<React.SetStateAction<JSX.Element>>] | undefined>(undefined);

export const useMenu = () => {
    const [menu] = React.useContext(ApplicationMenuContext)!
    return menu
}

export const useConfigureMenu = (menu: any) => {
    const [existing_menu, setMenu] = React.useContext(ApplicationMenuContext)!
    if (menu !== existing_menu) {
        setMenu(menu)
    }
}