import React, { Component } from 'react';
import { getAllEmployees, getAllEmployeesById } from "./EmployeesAPI";

class Directory extends Component {

    handleClickEmployee = id =>{
        console.log(id);
    };

    render() {
        //return list
        const empList = getAllEmployees();
        return (
            <div>
               <h2>There is our Emplyee Directory</h2>
               <div>
                {empList.map(employee =>{
                    return (
                        <div onClick={this.handleClickEmployee.bind(this, employee.id)}>
                            Employee Name: {employee.name}
                        </div>
                    );
                })}
               </div>
            </div>
        );
    }
    
}

export default Directory;