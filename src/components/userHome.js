import React, { Component, useEffect, useState } from "react";
import SideBar from "./Sidebar/SideBar";
import MenuBar from "./Sidebar/SidebarMenu";
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="auth-wrapper">
      <SideBar />
      {/* <div className="auth-inner"> */}
      {/* <div> */}
      <dev className="login-user">
        <h5 className="user-nmae">{userData.fname}</h5>
        <h5 className="user-email">{userData.email}</h5>

        <button className="logout-button" onClick={logOut} className="btn btn-primary">
          Log Out
        </button>{" "}
       </dev>
    {/* </div> */}
     </div>
    // </div>
  );
}
