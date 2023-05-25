import React, {useEffect, useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import ProgressBar from "./progress-bar.component"
// import axios from 'axios';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import { Line } from 'react-progressbar';
const CreateRelease = () => {
  // const [UPCEAN, setUPCEAN] = useState(null);
  // const [CLine, setCLine] = useState(null);
  // const [PLine, setPLine] = useState(null);
  // const [ReleaseDate, setReleaseDate] = useState(null);
  // const [LabelName, setLabelName] = useState(null);
  // const [SubGenre, setSubGenre] = useState(null);
  // const [Genre, setGenre] = useState(null);
  // const [FeaturingArtist, setFeaturingArtist] = useState(null);
  // const [PrimaryArtist, setPrimaryArtist] = useState(null);
  // const [ReleaseTitle, setReleaseTitle] = useState(null);

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   if (id === "UPCEAN") {
  //     setUPCEAN(value);
  //   }
  //   if (id === "CLine") {
  //     setCLine(value);
  //   }
  //   if (id === "PLine") {
  //     setPLine(value);
  //   }
  //   if (id === "ReleaseDate") {
  //     setReleaseDate(value);
  //   }
  //   if (id === "LabelName") {
  //     setLabelName(value);
  //   }
  //   if (id === "SubGenre") {
  //     setSubGenre(value);
  //   }
  //   if (id === "Genre") {
  //     setGenre(value);
  //   }
  //   if (id === "FeaturingArtist") {
  //     setFeaturingArtist(value);
  //   }
  //   if (id === "PrimaryArtist") {
  //     setPrimaryArtist(value);
  //   }
  //   if (id === "ReleaseTitle") {
  //     setReleaseTitle(value);
  //   }
  // };

  // const handleSubmit = () => {
  //   console.log(
  //     UPCEAN,
  //     CLine,
  //     PLine,
  //     ReleaseDate,
  //     LabelName,
  //     SubGenre,
  //     Genre,
  //     FeaturingArtist,
  //     PrimaryArtist,
  //     ReleaseTitle
  //   );
  // };
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [uploadProgress, setUploadProgress] = useState(0);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };
  // const handleUpload = async () => {
  //   const formData = new FormData();
  //   formData.append('song', selectedFile);
  //   try {
  //     await axios.post('/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //       onUploadProgress: (progressEvent) => {
  //         const progress = Math.round(
  //           (progressEvent.loaded * 100) / progressEvent.total
  //         );
  //         setUploadProgress(progress);
  //       },
  //     });
  //     // Upload complete, perform any necessary actions (e.g., display success message)
  //   } catch (error) {
  //     // Handle upload error (e.g., display error message)
  //   }
  // };
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      // Perform form submission logic here
      console.log(`Name: ${name}, Email: ${email}`);
      // Clear form fields
      setName('');
      setEmail('');
      // Close the form
      handleClose();
    };
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);
  return (
    <div className="mai-nev">
    <Link className="button1" to="/CreateRelease">Release Info</Link>
    <Link className="button1" to="/Songsinfo">Song Info</Link>
    <Link className="button1" to="/Songsinfo">Platform</Link>
    <Link className="button1" to="/Songsinfo">Submission</Link>
   
    <div className="App">
    <Link  to="/AddSongDeteals">Release Info</Link>
      {/* <ProgressBar bgcolor={"#6a1b9a"} completed={completed} /> */}
    </div>
    
    <div class="divScroll">
        <button onClick={handleOpen}>Add Song Details</button>
        {isOpen && (
          <div className="overlay">
            <div className="form-container">
              <h2 style={{position:'left'}}>Add Details</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
  
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
  
                <button type="submit">Submit</button>
                <button onClick={handleClose}>Cancel</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateRelease;

