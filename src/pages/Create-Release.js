import React, { useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
const CreateRelease = () => {
  const [UPCEAN, setUPCEAN] = useState(null);
  const [CLine, setCLine] = useState(null);
  const [PLine, setPLine] = useState(null);
  const [ReleaseDate, setReleaseDate] = useState(null);
  const [LabelName, setLabelName] = useState(null);
  const [SubGenre, setSubGenre] = useState(null);
  const [Genre, setGenre] = useState(null);
  const [FeaturingArtist, setFeaturingArtist] = useState(null);
  const [PrimaryArtist, setPrimaryArtist] = useState(null);
  const [ReleaseTitle, setReleaseTitle] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "UPCEAN") {
      setUPCEAN(value);
    }
    if (id === "CLine") {
      setCLine(value);
    }
    if (id === "PLine") {
      setPLine(value);
    }
    if (id === "ReleaseDate") {
      setReleaseDate(value);
    }
    if (id === "LabelName") {
      setLabelName(value);
    }
    if (id === "SubGenre") {
      setSubGenre(value);
    }
    if (id === "Genre") {
      setGenre(value);
    }
    if (id === "FeaturingArtist") {
      setFeaturingArtist(value);
    }
    if (id === "PrimaryArtist") {
      setPrimaryArtist(value);
    }
    if (id === "ReleaseTitle") {
      setReleaseTitle(value);
    }
  };

  const handleSubmit = () => {
    console.log(
      UPCEAN,
      CLine,
      PLine,
      ReleaseDate,
      LabelName,
      SubGenre,
      Genre,
      FeaturingArtist,
      PrimaryArtist,
      ReleaseTitle
    );
  };

  return (
    <div className="mai-nev">
    <Link className="button1" to="/CreateRelease">Release Info</Link>
    <Link className="button1" to="/Songsinfo">Song Info</Link>
    <Link className="button1" to="/Songsinfo">Platform</Link>
    <Link className="button1" to="/Songsinfo">Submission</Link>
      {/* <input className="button1" type="button" value="Release Info" />
      <input className="button1" type="button" value="Song Info" />
      <input className="button1" type="button" value="Platform" />
      <input className="button1" type="button" value="Submission" /> */}

      <div className="flex-container">
        <div>
          <div className="box">
            <img src="pic_trulli.jpg" type="file" alt="Italian Trulli"></img>
          </div>
          <input className="file" type="file"></input>
          <h4 className="h4">ARTWORK GUIDELINES</h4>
        </div>
        <div>
          <label className="lable">Release Type*</label>
          <div>
            <select
              className="optiontype"
              name="work_days"
              id="id_work_days"
              multiple
            >
              <option value="EP">EP</option>
              <option value="Single">Single</option>
              <option value="Album">Album</option>
              <option value="Component">Component</option>
            </select>
          </div>

          <label className="lable">Release Title*</label>
          <input
            type="text"
            required="true"
            className="form-control"
            placeholder="Release Title"
            id="ReleaseTitle"
            value={ReleaseTitle}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="lable">Primary Artist*</label>
          <input
            type="text"
            required="true"
            className="form-control"
            placeholder="Primary Artist"
            id="PrimaryArtist"
            value={PrimaryArtist}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="lable">Featuring Artist*</label>
          <input
            type="text"
            required="true"
            className="form-control"
            placeholder="Featuring Artist"
            id="FeaturingArtist"
            value={FeaturingArtist}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="lable">Genre*</label>
          <input
            type="text"
            required="true"
            className="form-control"
            placeholder="Genre"
            id="Genre"
            value={Genre}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="lable">Sub Genre*</label>
          <input
            type="text"
            required="true"
            className="form-control"
            placeholder="Sub Genre"
            id="SubGenre"
            value={SubGenre}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="label">
          <label className="lable">Label Name*</label>
          <input
            type="text"
            required="true"
            className="form-control"
            placeholder="Label Name"
            id="LabelName"
            value={LabelName}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="lable">Release Date*</label>
          <input
            type="date"
            required="true"
            className="form-control"
            placeholder="Release Date"
            id="ReleaseDate"
            value={ReleaseDate}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="lable">Line*</label>
          <input
            type="text"
            required="true"
            className="form-control"
            placeholder="P-Line"
            id="PLine"
            value={PLine}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="lable">C Line*</label>
          <input
            type="text"
            required="true"
            className="form-control"
            placeholder="C-Line"
            id="CLine"
            value={CLine}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="lable">RUPC/EAN*</label>
          <input
            type="text"
            required="true"
            className="form-control"
            placeholder="UPC/EAN"
            id="UPCEAN"
            value={UPCEAN}
            onChange={(e) => handleInputChange(e)}
          />
          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CreateRelease;
