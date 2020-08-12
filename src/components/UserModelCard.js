import React, { Component } from 'react';

const UserModel = ({userModel}) => {
    return(
        <div style={{marginBottom: "10px"}}>
            Username: <a href={userModel.url}>{userModel.username === "" ? "N/A" : userModel.username}</a><br/>
            Email: <span>{userModel.email ? "N/A" : userModel.email}</span><br/>
            Testing: <span>{userModel.testing}</span><br/>
        </div>
    )
}


  export default UserModel;