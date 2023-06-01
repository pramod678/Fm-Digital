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
    <div className="mai-nev">
    <Link className="button1" to="/CreateRelease">
        Release Info
      </Link>
      <Link className="button1" to="/Songsinfo">
        Song Info
      </Link>
      <Link className="button1" to="/Platform">
        Platform
      </Link>
      <Link className="button1" to="/Submission">
        Submission
      </Link>
    <div className="auth-wrapper">
    <div style={{position:'absolute',marginTop:'870px'}} ><SideBar/></div>
      {/* <div className="auth-inner"> */}
      {/* <div> */}
      <dev className="login-user">
      <h5 className="user-nmae">{userData.fname}</h5>
        {/* <h5 className="user-email">{userData.email}</h5> */}

        <button  onClick={logOut} className="logout-button">
          Log Out
        </button>{" "}
       </dev>
    {/* </div> */}
     </div>
    </div>
  );
}
