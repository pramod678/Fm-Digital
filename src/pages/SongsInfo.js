import React, { useEffect, useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FileUploader } from "react-drag-drop-files";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import UserDetails from "./../components/userDetails";
import SideBar from "../components/Sidebar/SideBar";

const SongsInfo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fileTypes = ["MP3", "WAV"];
  const [file, setFile] = useState(null);

  // songsupload
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
    // setFile(file)
  };
  const handleChange = (file) => {
    setFile(file);
  };
  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      setUploading(true);

      const totalSize = selectedFiles.reduce(
        (total, file) => total + file.size,
        0
      );
      let uploadedSize = 0;
      let startTime = new Date();

      const updateProgress = () => {
        const currentTime = new Date();
        const elapsedTime = (currentTime - startTime) / 1000; // in seconds

        setUploadProgress(Math.min((uploadedSize / totalSize) * 100, 100));
        setUploadSpeed(Math.round(uploadedSize / elapsedTime / 1024)); // in KB/s
      };

      const uploadFile = (file) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            uploadedSize += file.size;
            updateProgress();
            resolve();
          }, Math.random() * 1000); // Simulating upload delay with random timeout
        });
      };

      const uploadAllFiles = async () => {
        for (const file of selectedFiles) {
          await uploadFile(file);
        }

        setUploading(false);
        setSelectedFiles([]);
        setUploadProgress(0);
        setUploadSpeed(0);
      };

      uploadAllFiles();
    }
  };

  //////add songs function
  const [inputFields, setInputFields] = useState([
    {
      PrimaryArtist: "",
    },
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        PrimaryArtist: "",
      },
    ]);
  };

  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  return (
    <div className="mai-nevsongs">
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
      <div style={{ position: "absolute", marginTop: "-30px" }}>
        <SideBar />
      </div>

      <div className="songuploging">

        <div className="GUIDELINES2">
          <ul style={{ fontSize: "12px" }}>
            {/* <h4>Use The lines in the box</h4> */}
            <h6>AUDIO GUIDELINES </h6>
            <li>Format: mp3 or wav</li>
            <li>Requirements: Minimum of 16 bit, 44.1 Khz, stereo.</li>
            <li>Recommended 24 bits, 48Khz or 24 bits 96Khz.</li>
            <li>File size: 95 MB</li>
          </ul>
        </div>
        {inputFields.map((data, index) => {
          const { PrimaryArtist, emailAddress, salary } = data;
          return (
            <div className="row my-3" key={index}>
              <div className="col-sm-11">
              <Button className="formbutton" variant="primary" onClick={handleShow}>
        Add Song Details
      </Button>
                {/* <input
                      // type="hidden"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={PrimaryArtist}
                      name="PrimaryArtist"
                      className="form-control"
                      placeholder="Primary Artist"
                    /> */}
                <div className="fileuploader2">
                  <FileUploader
                    multiple={true}
                    handleChange={handleChange}
                    onChange={handleFileChange}
                    name="file"
                    types={fileTypes}
                  />
                </div>
                {uploading && (
                  <div>
                    <p>Progress: {uploadProgress}%</p>
                    <p>Speed: {uploadSpeed} KB/s</p>
                    <progress value={uploadProgress} max={100} />
                  </div>
                )}
                <button
                  style={{
                    position: "absolute",
                    marginTop: "-44px",
                    left:"102%"
                  }}
                  className="btn btn-outline-success"
                  onClick={addInputField}
                >
                  +
                </button>
              </div>

              <div className="Addclosebutton2">
                {inputFields.length !== 1 ? (
                  <button
                    className="btn btn-outline-danger"
                    onClick={removeInputFields}
                  >
                    x
                  </button>
                ) : (
                  ""
                )}
              </div>
              
            </div>
            
          );
        })}
        
      </div>
      {/* <Button className="formbutton" variant="primary" onClick={handleShow}>
        Add Song Details
      </Button> */}
     
      <>
        <Modal.Title
          style={{
            position: "relative",
            marginTop: "40px",
            marginLeft: "20px",
          }}
        >
          Upload Assets
        </Modal.Title>
        {/* <h5 style={{marginRight:'560px',color:'blue',marginTop:'150px',position:'relative'}}>AUDIO FILE GUDELINES</h5> */}
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add songs Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Track version</Form.Label>
              <div>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  Original
                </label>
                &nbsp;&nbsp;
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  karaoke
                </label>
                &nbsp;&nbsp;
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  Melody
                </label>
                &nbsp;&nbsp;
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  Cover
                </label>
              </div>
              <Form.Label>Instrumental</Form.Label>
              <div>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
                &nbsp;&nbsp;
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault6"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  No
                </label>
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" autoFocus />
                <Form.Label>Version/Subtitle</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Version Subtitle"
                  autoFocus
                />
                <Form.Label>Primary artist</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Primary artist"
                  autoFocus
                />
                <Form.Label>Featuring Artist</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Featuring Artist"
                  autoFocus
                />
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Author" autoFocus />
                <Form.Label>Composer</Form.Label>
                <Form.Control type="text" placeholder="Composer" autoFocus />
                <Form.Label>Producer</Form.Label>
                <Form.Control type="text" placeholder="Producer" autoFocus />
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Publisher" autoFocus />
              </Form.Group>
              <Form.Label>Have your own ISRC</Form.Label>
              <div>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault7"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
                &nbsp;&nbsp;
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault8"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  No
                </label>
                &nbsp;&nbsp;
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Genre</Form.Label>
                <select
                  className="form-select"
                  // value={this.state.selectValue}
                  // onChange={this.handleChange}
                >
                  <option value="Select">Select Genre</option>
                  <option value="Radish">A</option>
                  <option value="Cherry">B</option>
                </select>

                <Form.Label>Sub genre</Form.Label>
                <Form.Control type="text" placeholder="Sub genre" autoFocus />
                <Form.Label>Explicit Version</Form.Label>
                <div>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault7"
                  />
                  &nbsp;&nbsp;
                  <label class="form-check-label" for="flexRadioDefault1">
                    Yes
                  </label>
                  &nbsp;&nbsp;
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault8"
                  />
                  &nbsp;&nbsp;
                  <label class="form-check-label" for="flexRadioDefault1">
                    No
                  </label>
                  &nbsp;&nbsp;
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault9"
                  />
                  &nbsp;&nbsp;
                  <label class="form-check-label" for="flexRadioDefault1">
                    Cleaned
                  </label>
                </div>
              </Form.Group>
              <Form.Label>Track Title Language</Form.Label>
              <select
                className="form-select"
                // value={this.state.selectValue}
                // onChange={this.handleChange}
              >
                <option value="Select">Select TrackT-itle Language</option>
                <option value="Radish">Enlish</option>
                <option value="Cherry">Hindi</option>
              </select>
              <Form.Label>Lyrics Language</Form.Label>
              <select
                className="form-select"
                // value={this.state.selectValue}
                // onChange={this.handleChange}
              >
                <option value="Select">Select Lyrics Language</option>
                <option value="Radish">A</option>
                <option value="Cherry">B</option>
              </select>
              <Form.Label>Featuring Artist</Form.Label>
              <Form.Control
                type="text"
                placeholder="Featuring Artist"
                autoFocus
              />
              <Form.Label>Lyrics</Form.Label>
              <Form.Control type="text" placeholder="Lyrics" autoFocus />
              <Form.Label>Caller Tune Timing</Form.Label>
              <Form.Control type="text" placeholder="hh:mm:ss" autoFocus />
              <Form.Label>Distribute Music video?</Form.Label>
              <div>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault10"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  Yes
                </label>
                &nbsp;&nbsp;
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault11"
                />
                &nbsp;&nbsp;
                <label class="form-check-label" for="flexRadioDefault1">
                  No
                </label>
              </div>
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
    </div>
  );
};

export default SongsInfo;
