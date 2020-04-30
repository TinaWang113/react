import React, { Component } from 'react';
import Counter from "./Counter";
import Profile from "./Profile";
import './App.css';


const employeeDirectory=[
  {
    name:"Bob",
    position: "Sr.Software Engineer",
    id:"1"
  },
  {
    name:"Sarah",
    position: "CEO",
    id:"2"
  },
  {
    name:"Tina",
    position: "Jr.Software Engineer",
    id:"3"
  }
];

class App extends Component{
  //state componemnt

  constructor(props){
    super(props);
    this.state = {
      employees: employeeDirectory,
      employeeOfTheMonth: "0"

    };
  }

  //function
  setEmpoyeeOfTheMonth = employeeId =>{
    this.setState({
      employeeOfTheMonth: employeeId
    });
  };



  render(){
    return (
      <div className="App">
        <h1>This is the blank state we're working with</h1>
      <Counter />
      {this.state.employees.map(employees => {
        return(
          <div style={{backgroundColor: employees.id  === this.state.employeeOfTheMonth? "yellow":
          "white "}}>
            <Profile key = {employees.id}
                      id = {employees.id}
                      empName = {employees.name}
                      position = {employees.position}
                      setEmpoyeeOfTheMonth ={this.setEmpoyeeOfTheMonth}
            />
          </div>   
        );
        
      })} 
      </div>
    );
  }
}

export default App;
