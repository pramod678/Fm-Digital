import React, { useEffect, useState } from "react";
import "./../Create-Release.css";
// import { Link } from "react-router-dom";
// import SongsInfo from './SongsInfo';
// import Button from "react-bootstrap/Button";
import SideBar from "../../components/Sidebar/SideBar";

const ProfileLinking = () => {
  //   const [platform, setPlatform] = useState("");
  const data = [
    {
      id: 1,
      ReleaseTitle: "hggsdhg",
      AudioTitle:"sonfgdg",
      Artist: "jhjdshjhsj",
      FB: "true",
      IG: "06-06-2023",
      Status: "hgdhg",
      Date:"07-07-2023"
  
      
    },
    {
      id: 2,
      ReleaseTitle: "hggsdhg",
      AudioTitle:"sonfgdg",
      Policy: "jhjdshjhsj",
      Date: "06-06-2023",
      URLs: "hgdhg",
     
      
    },
    
  ];
  return (
    <div className="mai-nev">
      <div style={{ position: "absolute", marginTop: "0px" }}>
        <SideBar />
      </div>
      <h3 className="catalogs">Profile Linking</h3>
      <div className="flex-container1">
        <div className="youtube">
          <label className="lable">Select release*</label>

          <select
            className="form-select"
            // value={this.state.selectValue}
            // onChange={this.handleChange}
          >
            <option value="Select">Select release</option>
            <option value="Radish">dynamic</option>
           
          </select>
          <label className="lable">Select platform*</label>

          <input type="url"
            className="form-control"
            placeholder="Make sure to enter the exact name of artist"
            // value={this.state.selectValue}
            // onChange={this.handleChange}
          >
            
            
          </input>
          <label className="lable">Instagram Link*</label>

          <input type="url"
            className="form-control"
            placeholder="Instagram Link"
            // value={this.state.selectValue}
            // onChange={this.handleChange}
          >
            
            
          </input>
        </div>
        <div className="label">
          <label className="lable">Select Audio*</label>
          <select
            className="form-select"
            // value={this.state.selectValue}
            // onChange={this.handleChange}
          >
            <option value="Select">Select Audio</option>
            <option value="Radish">Dynamic</option>
            
          </select>
          <label className="lable">Fecebook Link*</label>

          <input type="url"
            className="form-control"
            placeholder="Fecebook Link"
            // value={this.state.selectValue}
            // onChange={this.handleChange}
          >
            
            
          </input>

          <button
            // onClick={() => handleSubmit()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
          <h3 style={{marginLeft:'-185%',marginTop:'30%'}}>Your Profile Linking History</h3>
        </div>
        
        <table className="table1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Release Title</th>
            <th>Audio Title</th>
            <th>Artist</th>
            <th>FB</th>
            <th>IG</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr  key={item.id}>
              <td>{item.id}</td>
              <td>{item.ReleaseTitle}</td>
              <td>{item.AudioTitle}</td>
              <td>{item.Artist}</td>
              <td>{item.FB}</td>
              <td>{item.IG}</td>
              <td><input type="checkbox"></input></td>
              <td>{item.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ProfileLinking;
