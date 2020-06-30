import React, { useContext} from  'react';

import ThemeContext from '../contexts/ThemeContext';


const Button = (props) => {

    const theme = useContext(ThemeContext);
    return(
        <div  style={{
            color: theme.textColor
        }}>
            <button>Click Me {theme.textColor}</button>
        </div>
    )
}

export default Button;