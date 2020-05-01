import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { getEmployeesById } from "./EmployeesAPI";
class Profile extends Component {

    constructor(props){
        super(props);
        //retrun list.
        const getEmployee = getEmployeesById(this.props.match.params.id);
        let employeeId = "Not found";
        let employeeName = "Not found";
        let employeeRole ="Not found";
        if(getEmployee.length >0){
            employeeId: getEmployee[0].id;
            employeeName : getEmployee[0].name;
            employeeRole : getEmployee[0].role;
        }else{
            return (
                <div>No any Employee be picked.</div>
            );
        }

        this.state = {
            id: employeeId,
            name: employeeName,
            rol: employeeRole
        };

    }

    render() {
        return (
            <div>
                <h4>This is our profile</h4>
                <h5>Name: {getEmployee[0].name} </h5>
                <h5>Role: {getEmployee[0].role} </h5>
                <h5>ID: {this.state.id} </h5>
            </div>
        );
    }
}

export default Profile;