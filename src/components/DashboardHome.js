// import React, { Component, useEffect, useState } from "react";
import SideBar from "./Sidebar/SideBar";
import "../index.css";
import { Link } from "react-router-dom";
// import MenuBar from "./Sidebar/SidebarMenu";
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="auth-wrapper">
    <div style={{position:'absolute',marginTop:'0px'}} ><SideBar/></div>
      <dev className="login-user">
      <h5 className="user-nmae">{userData.fname}user1</h5>
      
        <button  onClick={logOut} className="logout-button">
          Log Out
        </button>{" "}
       </dev>
       <div  className="cantener">
       <h3 className="newsLable">News</h3>
       </div>
    
    </div>
  );
}
