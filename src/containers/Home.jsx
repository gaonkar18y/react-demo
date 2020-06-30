import React from 'react';

import Dashborad from './Dashborad.jsx'

import LifeCylce from './LifeCylce.jsx'

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){

        this.timeoutRef = setInterval(()=>{
            let newCount  = this.state.count + 1;
            this.setState({
                count: newCount
            })
        },1000*10);
    }

     // un mount phase
    componentWillUnmount(){
       clearTimeout(this.timeoutRef);
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <Dashborad count={Math.random(10)}/>
                <LifeCylce count={this.state.count} />
            </div>
        )
    }
}

export default Home;