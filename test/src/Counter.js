import React, {Component} from 'react';

class Counter extends Component{
    //Js here
constructor(props){
    super(props)
    this.state= {
        count:0
    };
}
increment = () =>{
    this.setState({
        count: this.state.count + 1
    })
};

decrement =()=>{
    this.setState({
        count: this.state.count - 1
    })
};

 render(){
    return(
        //put any html here
        <div className="counter">
            <h1>this is our current count:{this.state.count}</h1>
            <button name="btn1" onClick={this.increment}>Increment</button>
            <button name="btn2" onClick={this.decrement}>Decrement</button>
        </div>
    );
 };
}
export default Counter;
