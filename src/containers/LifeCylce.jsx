import React from 'react';

class LifeCylce extends React.Component {
    // mount phase
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            // initial value of state
            isCountEven: false,
            fullName: 'xyz'
        }
    }

    // mount and update phase
   static getDerivedStateFromProps(props, state){

    // use when state value depends on props
    // but always try to avoid
    console.log('getDerivedStateFromProps', props);
    if ( props.count%2 == 0)  {
        return {
            ...state,
            isCountEven: true
        }
    } else {
        return {
            ...state,
            isCountEven: false
        }
    }
   }

   // update
   shouldComponentUpdate( nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
    //return nextState.isCountEven === true;
   }

   // 
   getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate');

    // called before actual dom changes are made

    let nameInput  = document.getElementById('name');
    if (nameInput) {
        return nameInput.value;
    } else {
        return null;
    }
   }

   // mount and update phase
   render(){
    console.log('render');
    return(
        <div>This is lifecycle demo
             <h1>Even</h1>
            { this.state.isCountEven && <input type="text" id="name" /> }
             <input type="text" id="fullName" value={this.state.fullName} />
        </div>
    )
   }
   // mount
   componentDidMount(){
    console.log('componentDidMount');
   }

   // update
   componentDidUpdate(props, state, snapshot){
    console.log('componentDidUpdate', snapshot);
    let fullName = this.state.fullName
    if (snapshot) {
        fullName+=snapshot;
        this.setState({
            fullName: fullName
        })
    }
   }


   // un mount phase
   componentWillUnmount(){

   }

   // error handling
   componentDidCatch(){
    console.log('componentDidCatch');
   }
}

export default LifeCylce;