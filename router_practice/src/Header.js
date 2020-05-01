import React, { Component } from 'react';
import {withRouter} from "react-router-dom";


class Header extends Component {
    handleClicHome = () =>{
        //push to url
        this.props.history.push("/");
    };
    
    handleEmployeeDirectory = () =>{
        this.props.history.push("/Directory");
    };
    
    render() {
        return (
            <div>
                <h2>This is the header</h2>
                <button onClick={this.handleClicHome}>Home page</button>
                <button onClick={this.handleEmployeeDirectory} >Emplyee Directory</button>
            </div>
        )
    }
}


export default withRouter(Header);