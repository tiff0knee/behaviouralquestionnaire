import React, { Component } from "react";
import { Link } from "react-router-dom";
import './UserLogOut.css';

class UserLogOut extends Component{
    state={
        loggedOut: false
    }

    logout=()=>{
        window.localStorage.clear('token');
        this.props.setUserInState(null)
    };


    render(){
        return(
            <div className="UserLogOut">   
                <Link onClick={this.logout} to='/'>Logout </Link>    
            </div>
        )
    }
}

export default UserLogOut;