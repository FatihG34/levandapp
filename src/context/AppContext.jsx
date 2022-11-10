import React, { createContext, useState } from 'react';
import { injectThemes } from 'daisyui/src/colors/functions';

export const AppContextProv = createContext();


const AppContext = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const value = {
        theme,
        setTheme

    }
    return (
        <AppContextProv.Provider value={value}>
            {children}
        </AppContextProv.Provider>
    )
}

export default AppContext