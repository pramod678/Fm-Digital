import React, { useEffect, useState } from "react";
import "./Create-Release.css";
import { BsCheckCircle,BsClock } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";
import { RiDraftFill } from "react-icons/ri";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import SideBar from "../components/Sidebar/SideBar";
import { BiCheck } from "react-icons/bi";
// import { Dropdown } from 'semantic-ui-react'

const Catalogs = () => {
  const [catalogsGet, setcatalogsGet] = useState([]);
  const [userData, setUserData] = useState("");
  console.log("catalogsGet",catalogsGet);
  useEffect(() => {
    fetch("http://192.168.0.108:5000/api/v1/user/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setUserData(data.data);
        handlecatalogsGet(data.data)
        // handlegenregGet()
        console.log(data.data);
        if (data.data === "token expired") {
          alert("Token expired login again");
          localStorage.clear();
          window.location.href = "./sign-in";
        }
      });
  }, []);
  ////getuser
  function handlecatalogsGet(userData) {
    console.log("userData>>>",userData);
    fetch(
      `http://192.168.0.108:5000/api/v1/createRelease/catalogsGet/${userData.users_id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("genere ---------", data.result);
        setcatalogsGet(data.result);
      });
  }
  
  const iconSelector = (status) => {
    switch (status) {
      case 0:
        return <p style={{color:"brown"}}><RiDraftFill/></p>
      case 1:
        return <p style={{color:"#808080"}}><BsClock/></p>
      case 2:
        return <p style={{color:"#add8e6"}}><FcCancel/></p>
      case 3:
        return <p style={{color:"#0000cd"}}><VscGitPullRequestNewChanges/></p>
      case 4:
        return <p style={{color:"green"}}><BsCheckCircle/></p>
      default:
        return <></>;
    }
  }

  //   const [platform, setPlatform] = useState("");
  return (
    <div className="mai-nev">
      <div style={{ position: "absolute", marginTop: "0px" }}>
        <SideBar />
      </div>
      <h3 className="catalogs">Catalog</h3>
      <div style={{position:'absolute',marginLeft:'15%', marginTop:'5%',fontSize:'150%'}}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search Title"
          // value={searchTerm}
          // onChange={(e) => {
          //   setSearchTerm(e.target.value);
          //   setCurrentPage(1);
          // }}
        />
      </div>
      <div style={{position:'absolute',marginLeft:'112%',top:'0%', width:'30%'}}>
        <select
          className="form-select"
          // value={filterCompleted}
          // onChange={(e) => {
          //   setFilterCompleted(e.target.value);
          //   setCurrentPage(1);
          // }}
        >
          <option defaultValue="All">All</option>
          <option value="true">approved</option>
          <option value="false">Draft</option>
          <option value="false">corrections</option>
        </select>
      </div>

      <h4 style={{position:'relative',marginLeft:'350%',marginTop:'-12%',fontSize:'130%'}}>Total&nbsp;Releases:46</h4>
      {/* <p>{message}</p> */}
      
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Album Artwork</th>
            <th>Title</th>
            <th>Artist Name</th>
            <th>Genre</th>
            <th>Label</th>
            <th>Tracks</th>
            <th>Relase Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {catalogsGet.map((item) => (
            <tr key={item._id}>
              <td>{item.releseInfo_id}</td>
              <td>{iconSelector(item?.Status)}</td>
              {/* <td> <button style={{borderRadius:"50%",fontSize:"10px",}} type="submit" className="btn btn-success">
                
                </button></td> */}
              <td>  <img style={{ height:60, width:80}}
                src={`http://localhost:5000/${item?.ImageDocument}`}
                type="file"
                alt="Art Work"
              ></img></td>
              <td>{item.Title}</td>
              <td>{item.ArtistName}</td>
              <td>{item.Genre}</td>
              <td>{item.Label}</td>
              <td>{item.Tracks}</td>
              <td>{item.createdAt}</td>
              <td>
                <button type="submit" className="btn btn-secondary">
                Draft
                {/* {item.action} */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Catalogs;
