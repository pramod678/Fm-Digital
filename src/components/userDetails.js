import React, {  useEffect, useState } from "react";
import AdminHome from "./adminHome";

import Dashboard from "./DashboardHome";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://192.168.1.113:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        if (data.data.userType === "Admin") {
          setAdmin(true);
        }

        setUserData(data.data);

        if (data.data === "token expired") {
          alert("Token expired login again");
          window.localStorage.clear();
          window.location.href = "./sign-in";
        }
      });
  }, []);

  return admin ? <AdminHome /> : <Dashboard userData={userData} />;
}
