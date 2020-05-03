import React, {Component} from 'react';
import { increment, decrement } from './Actions';
import { connect } from 'react-redux';

class Counter extends Component{

increment = () =>{
    this.props.increment();
};

decrement =()=>{
    /*
    this.setState({
        count: this.state.count - 1
    })
    */
   this.props.decrement();
};

 render(){
    return(
        //put any html here
        <div className="counter">
            <h1>this is our current count:{this.props.currentCount}</h1>
            <button name="btn1" onClick={this.increment}>Increment</button>
            <button name="btn2" onClick={this.decrement}>Decrement</button>
        </div>
    );
 };
}

const mapStateToProps = state =>({
    count : state.currentCount
});

const mapDispatchToProps = {
    increment, 
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
