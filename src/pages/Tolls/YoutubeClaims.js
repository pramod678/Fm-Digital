import React, { useEffect, useState } from "react";
import "./../Create-Release.css";
// import { Link } from "react-router-dom";
// import SongsInfo from './SongsInfo';
// import Button from "react-bootstrap/Button";
import SideBar from "../../components/Sidebar/SideBar";

const YoutubeClaims = () => {
  //   const [platform, setPlatform] = useState("");
  const data = [
    {
      id: 1,
      ReleaseTitle: "hggsdhg",
      AudioTitle:"sonfgdg",
      Policy: "jhjdshjhsj",
      Date: "06-06-2023",
      URLs: "hgdhg",
     
      
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
      <h3 className="catalogs">Youtube Claims</h3>
      <div className="flex-container1">
        <div className="youtube">
          <label className="lable">Select release*</label>

          <select
            className="form-select"
            // value={this.state.selectValue}
            // onChange={this.handleChange}
          >
            <option value="Select">Select release</option>
            
            <option  value="Radish"></option>
            
          </select>
          <label className="lable">Select platform*</label>

          <select
            className="form-select"
            // value={this.state.selectValue}
            // onChange={this.handleChange}
          >
            <option value="Select">Select platform</option>
            <option value="Radish">Youtube Content ID</option>
            
          </select>
          <label className="lable">Paste URL*</label>

          <input type="url"
            className="form-control"
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
            <option value="Radish">A</option>
            <option value="Cherry">B</option>
          </select>
          <label className="lable">Select Policy*</label>

          <select
            className="form-select"
            // value={this.state.selectValue}
            // onChange={this.handleChange}
          >
            <option value="Select">Select Policy</option>
            <option value="Radish">Monetize</option>
            <option value="Cherry">Remove</option>
            <option value="Cherry">Block</option>
          </select>

          <button
            // onClick={() => handleSubmit()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
          <h3 style={{marginLeft:'-185%',marginTop:'30%'}}>Your UGC Claims History</h3>
        </div>
        
        <table className="table1" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Release Title</th>
            <th>Audio Title</th>
            <th>Policy</th>
            <th>Status</th>
            <th>Date</th>
            <th>URLs</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="tr" key={item.id}>
              <td>{item.id}</td>
              <td>{item.ReleaseTitle}</td>
              <td>{item.AudioTitle}</td>
              <td>{item.Policy}</td>
              <td><input type="checkbox"></input></td>
              <td>{item.Date}</td>
              <td>{item.URLs}</td>

            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default YoutubeClaims;
