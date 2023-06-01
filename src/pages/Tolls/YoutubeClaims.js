import React, { useEffect, useState } from "react";
import "./../Create-Release.css";
import { Link } from "react-router-dom";
// import SongsInfo from './SongsInfo';
import Button from 'react-bootstrap/Button';
import SideBar from "../../components/Sidebar/SideBar";

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
      <div style={{position:'absolute',marginTop:'-30px'}} ><SideBar/></div>
  
      </div>
    </div>
    
  );
};

export default Submission;
