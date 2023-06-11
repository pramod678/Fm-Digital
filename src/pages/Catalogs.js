import React, { useEffect, useState } from "react";
import "./Create-Release.css";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import SideBar from "../components/Sidebar/SideBar";
// import { Dropdown } from 'semantic-ui-react'

const Catalogs = () => {
  const data = [
    {
      id: 1,
      Status: "true",
      AlbumArtwork: 25,
      Title: "john@example.com",
      ArtistName: "eytteyeyu",
      Genre: "yuewueu",
      Label: "hgdhg",
      OfTracks: "dghjkh",
      RelaseDate: "2325-2023",
    },
    {
      id: 2,
      Status: "Jane Smith",
      AlbumArtwork: 30,
      Title: "jane@example.com",
      ArtistName: "eytteyeyu",
      Genre: "yuewueu",
      Label: "hgdhg",
      OfTracks: "dghjkh",
      RelaseDate: "2325-2023",
    },
    {
      id: 3,
      Status: "Bob Johnson",
      AlbumArtwork: 35,
      Title: "bob@example.com",
      ArtistName: "eytteyeyu",
      Genre: "yuewueu",
      Label: "hgdhg",
      OfTracks: "dghjkh",
      RelaseDate: "2325-2023",
    },
    {
      id: 4,
      Status: "Alice Williams",
      AlbumArtwork: 28,
      Title: "alice@example.com",
      ArtistName: "eytteyeyu",
      Genre: "yuewueu",
      Label: "hgdhg",
      OfTracks: "dghjkh",
      RelaseDate: "2325-2023",
    },
  ];

  //   const [platform, setPlatform] = useState("");
  return (
    <div className="mai-nev">
      <div style={{ position: "absolute", marginTop: "0px" }}>
        <SideBar />
      </div>
      <h3 className="catalogs">Catalog</h3>
      <div style={{position:'absolute',marginLeft:'15%', marginTop:'5%',fontSize:'150%'}}>
      {/* <input  type="text" placeholder="Search hear"></input> */}
      {/* <select style={{position:'absolute',marginLeft:'2%',fontSize:'130%'}}
        // value={this.state.selectValue} 
        // onChange={this.handleChange} 
      >
       <option value="Orange">All</option>
        <option value="Radish">A</option>
        <option value="Cherry">B</option>
      </select> */}
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

      <h4 style={{position:'absolute',marginLeft:'500%',marginTop:'-12%',fontSize:'130%'}}>Total&nbsp;Releases:46</h4>
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
            <th>Of Tracks</th>
            <th>Relase Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><input type="checkbox"></input></td>
              <td>{item.AlbumArtwork}</td>
              <td>{item.Title}</td>
              <td>{item.ArtistName}</td>
              <td>{item.Genre}</td>
              <td>{item.Label}</td>
              <td>{item.OfTracks}</td>
              <td>{item.RelaseDate}</td>
              <td>
                <button type="submit" className="btn btn-primary">
                  Stores
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
