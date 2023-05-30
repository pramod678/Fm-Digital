import React, { useEffect, useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import Label from "./Label";

const platform = () => {
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
      <ul class="audio-list">
        <li>
          <label style={{ fontSize: "30px" }} for="company1">
            Audio (190+)
          </label>
          <input type="checkbox" id="comapany1"></input>
        </li>
      </ul>

      <div>
<div style={{position:'absolute',marginTop:'-132px'}} ><SideBar/></div>
        <ul className="company-list">
          <li>
          <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
          <li>
          <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
          <li>
          <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
          <li>
          <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
          <li>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
          <li>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
        </ul>
        <ul class="audio-list">
          <li>
            <label style={{ fontSize: "25px" }} for="company1">
              CRBT(4+)
            </label>
            <input type="checkbox" id="comapany1"></input>
          </li>
        </ul>
        <ul class="company-list">
          <li>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
          <li>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
        </ul>
        <ul class="audio-list">
          <li>
            <label style={{ fontSize: "25px" }} for="company1">
              Video Platform(8+)
            </label>
            <input type="checkbox" id="comapany1"></input>
          </li>
        </ul>
        <ul class="company-list">
          <li>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
          <li>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
          <li>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
            <input type="checkbox" id="comapany1"></input>
            <label for="company1">Company A</label>
          </li>
   
        </ul>
      </div>
    </div>
  );
};

export default platform;
