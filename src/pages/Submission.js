import React, { useEffect, useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import SongsInfo from './SongsInfo';
import Button from 'react-bootstrap/Button';
import SideBar from "../components/Sidebar/SideBar";

const Submission = () => {
//   const [platform, setPlatform] = useState("");
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
      <div>
      <div style={{position:'absolute',marginTop:'-70px'}} ><SideBar/></div>
        <h2 style={{marginTop:'40px',marginRight:'1090px'}}>Release Information</h2>
        <div style={{marginTop:'40px'}}>
        <lable style={{marginRight:'1260px'}} >Titale:shjsj</lable>
        <lable >Genre:hdsghgs</lable>
        </div>
        <div>
        <lable style={{marginRight:'1230px'}}>Artist:bsjsss</lable>
        <lable>SubGenre:snsnjks</lable>
        </div>
        <div>
        <lable style={{marginRight:'1280px'}}>Lable:sjjsaj</lable>
        <lable>songs:snjjsj</lable>
        </div>
       
        <input style={{marginRight:'20px'}} type="checkbox"></input>
        <label>I understand and agree to the</label>
        <div>
        <Button style={{marginTop:'20px'}} variant="dark">Submit</Button>
        </div>
      </div>
    </div>
    
  );
};

export default Submission;
