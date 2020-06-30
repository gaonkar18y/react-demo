import React from 'react';

import './App.scss'

import Home from './containers/Home.jsx';
import ThemeContext from './contexts/ThemeContext';


const App = (props)=>{
    return(
        <div id="title">
            <ThemeContext.Provider value={{
                    theme: 'lightblue',
                    textColor: 'blue'
                }}>
                <Home />
            </ThemeContext.Provider>
            
        </div>
    )
}

export default App;