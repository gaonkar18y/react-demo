import React from 'react';

import ThemeContext from '../contexts/ThemeContext';
import Button from '../components/Button.jsx'

class Dashboard extends React.Component{
    static contextType = ThemeContext;
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    /*static getDerivedStateFromProps(state, props){
        console.log('getDerivedStateFromProps',props);
        return {
            count: props.count+1
        }
    }*/
    componentDidMount(){
      //  console.log('componentDidMount');
    }
    render(){
       // console.log('render', this.state);
        return(
            <div style={{
                color: this.context.textColor
            }}>
                This is Dashboard { this.context.theme}
                <Button />
            </div>
        )
    }
}
export default Dashboard;
