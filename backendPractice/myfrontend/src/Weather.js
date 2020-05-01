import React, { Component } from 'react'
import axios from 'axios';

class Weather extends Component {
    constructor(){
        super();
        this.state = {
            weather: "not yet gotten"
        };
    }

    handleBtnClick =() =>{
        axios.get("/getWeatherCalgary").then( response => {
        // console.log(response.data.humidity);
        this.setState ({
            weather : response.data.humidity
        }) 
        });
    };

    render() {
        return (
            <div>
                <button onClick ={this.handleBtnClick}>Get weather in Calary</button>
            <h1>The weather in Calgary is : {this.state.weather}</h1>
            </div>
        )
    }
}

export default Weather;