import React, { useEffect, useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import SongsInfo from './SongsInfo';
import Button from 'react-bootstrap/Button';
import SideBar from "../components/Sidebar/SideBar";

const Submission = () => {
//   const [platform, setPlatform] = useState("");
const data = [
  {
    company1: "MX Player",
    company2: "HungamA",
    company3: "Amazon",
    company4: "Tidal",
    company5: "Apple music",
  },
  {
    company1: "Boomplay",
    company2: "VI",
    company3: "Tencent",
    company4: "Facebook PMV",
    company5: "Vimeo",
  },

];
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
      <div>
      <div style={{position:'absolute',marginTop:'-70px'}} ><SideBar/></div>
        <h2 style={{marginTop:'40px',marginRight:'1090px'}}>Release Information</h2>
        <table border = "1" width = "100%">
         
         <tr>
            <td>
               <table border = "1" width = "100%">
              
                  <tr>
                     <td><h6>Titale1</h6>Ramesh Raman</td>
                     <td><h6>Titale2</h6>5000</td>
                  </tr>
                  <tr>
                     <td><h6>Tital3</h6>Shabbir Hussein</td>
                     <td><h6>Tital4</h6>7000</td>
                  </tr>
               </table>
            </td>
         </tr>
         
      </table>
        {/* <div style={{marginTop:'40px'}}>
        <lable style={{marginRight:'1260px'}} >Titale:shjsj</lable>
        <lable >Genre:hdsghgs</lable>
        </div> */}
        {/* <div>
        <lable style={{marginRight:'1230px'}}>Artist:bsjsss</lable>
        <lable>SubGenre:snsnjks</lable>
        </div> */}
        {/* <div>
        <lable style={{marginRight:'1280px'}}>Lable:sjjsaj</lable>
        <lable>songs:snjjsj</lable>
        </div> */}
       
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
