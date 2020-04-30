import React, { Component } from 'react'

  class Profile extends Component {
      handleSetEmployeeOfTheMonth = () =>{
          this.props.setEmpoyeeOfTheMonth(this.props.id);
      };
    render() {
        return (
            <div>
                <img src="https://brandyourself.com/blog/wp-content/uploads/linkedin-profile-picture-too-close-768x576.png" 
                alt='pic' />
            <h1>{this.props.empName}</h1>  
            <p>{this.props.position}</p>
            <button name="btn" onClick = {this.handleSetEmployeeOfTheMonth}>
            Set {this.props.name} as employee of the month
            </button>            
            </div>
        )
    }
}

export default Profile;