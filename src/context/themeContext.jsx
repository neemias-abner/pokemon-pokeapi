import React, { useState } from "react";


export const themes ={
    light:{
        color: `#000000`,
        background:`#eeeeeeee`,
        
        mainColor:`#a3a2a2`,
        cardColor:`#c7c3c3`
        
    },
    dark:{
        color: `#ffffff`,
        background:`#2b2b2b`,
        mainColor:`#6e6d6d`,
        cardColor:`#1b1b1b`
    }
}
export const ThemeContext = React.createContext();
export const ThemeProvider = (props)=>{
    const [theme , setTheme] = useState(themes.light)
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
        {props.children}
        </ThemeContext.Provider>
    )
}