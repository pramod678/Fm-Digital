import React, { useEffect, useState } from "react";
import "./Create-Release.css";
// import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FileUploader } from "react-drag-drop-files";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import SongsInfo from "./SongsInfo";
import Button from "react-bootstrap/Button";
import SideBar from "../components/Sidebar/SideBar";

const Label = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const [platform, setPlatform] = useState("");
  const data = [
    {
      id: 1,
      Title: "hggsdhg",
      Status: "sonfgdg",
      Action: "jhjdshjhsj",
    },
    {
      id: 1,
      Title: "hggsdhg",
      Status: "sonfgdg",
      Action: "jhjdshjhsj",
    },
  ];
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="mai-nev">
      <div style={{ position: "absolute", marginTop: "0px" }}>
        <SideBar />
      </div>
      <h3 className="catalogs">Add Label</h3>
      <div className="flex-container1">
        <div className="youtube">
          <button
          className="btn btn-default"
            style={{ width: "40%", color: "red",borderRadius:"8px", borderColor:"black" }}
            type="submit"
            onClick={handleShow}
          >
            +&nbsp;Add Label
          </button>
        </div>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add songs Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Title" autoFocus /><br/>
                  <Form.Label>Youtube URL</Form.Label>
                  <Form.Control type="text" placeholder="Youtube URL" autoFocus /><br/>
                  <Form.Label>File</Form.Label>
 
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        placeholder="file"
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
                  {/* <Form.Control type="file" placeholder="Composer" autoFocus /> */}
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <table className="table2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.Title}</td>
                <td><input type="checkbox"></input></td>
                <td>{item.Action}</td>
  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Label;
