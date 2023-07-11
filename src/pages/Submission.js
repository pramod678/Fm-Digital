import React, { useEffect, useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import SongsInfo from './SongsInfo';
import Button from 'react-bootstrap/Button';
import SideBar from "../components/Sidebar/SideBar";

const Submission = () => {
  // const [userData, setUserData] = useState("");
  const [submissionGet, setsubmissionGet] = useState("");
  console.log("submissionGet",submissionGet);
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
        handlesubmissionGet(data.data)
        if (data.data === "token expired") {
          alert("Token expired login again");
          localStorage.clear();
          window.location.href = "./sign-in";
        }
        // console.log("data.data",data.data);
      });
  }, []);
  ////getuser
  function handlesubmissionGet(userData) {
    console.log(">>>>>>",userData);
    fetch(
      `http://192.168.0.108:5000/api/v1/createRelease/submissionGet/${userData.users_id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {

        // console.log("releseInfoGetOne ---------", data.data);
        setsubmissionGet(data.data);
      });
    }
    // console.log("releseInfoGetOne",releseInfoGetOne?.ImageDocument);
    const handleSubmit = async (e) => {
      fetch(
        "http://192.168.0.108:5000/api/v1/createRelease/submissionPost",
        {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            releseInfo_id: submissionGet.releseInfo_id,
            Status: 1,
            users_id: parseInt(submissionGet.users_id),
          }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "CreateSuccesfully");
          if (data.status === "ok") {
            alert("Create Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  return (
    <div className="mai-nev">
      <Link className="button1" to="/ReleseInfo">
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
      
      <div style={{position:'absolute',marginTop:'-30px'}} ><SideBar/></div>
        <h2 style={{marginTop:'35px',marginRight:'600px'}}>Release Information</h2>
               <table width="70%" style={{marginLeft:"25%",marginTop:'40px', textAlign:"left"}} >
              
                  <tr>
                     <td><h6>Titale:&nbsp;&nbsp;&nbsp;&nbsp;{`${submissionGet.Title}`}</h6></td>
                     <td><h6>Genre:&nbsp;&nbsp;&nbsp;&nbsp;{`${submissionGet.Genre}`}</h6></td>
                  </tr>
                  
                  <tr>
                     <td><h6>Artist:&nbsp;&nbsp;&nbsp;&nbsp;{`${submissionGet.Artist}`}</h6></td>
                     <td><h6>SubGenre:&nbsp;&nbsp;&nbsp;&nbsp;{`${submissionGet.SubGenre}`}</h6></td>
                  </tr>
                  <tr>
                     <td><h6>Label:&nbsp;&nbsp;&nbsp;&nbsp;{`${submissionGet.Label}`}</h6></td>
                     <td><h6># Songs:&nbsp;&nbsp;&nbsp;&nbsp;{`${submissionGet.Songs}`}</h6></td>
                  </tr>
               </table>
               <div className="box2">
              <img style={{ height:146, width:145}}
                src={`http://localhost:5000/${submissionGet?.AudioDocument}`}
                type="file"
                alt="Art Work"
              ></img>
        
            </div>
        <input style={{marginRight:'20px',marginTop:"5%"}} type="checkbox"></input>
        <label>I understand and agree to the </label> <a href="/">FM Digital Distribution Terms & Privacy Policy.</a>
        <div>
        <Button style={{marginTop:'20px'}} onClick={() => handleSubmit()}  variant="btn btn-dark">Submit</Button>
        </div>
      </div>
  
    
  );
};

export default Submission;
