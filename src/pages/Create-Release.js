import React, { useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
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
  const [inputFields, setInputFields] = useState([
    {
      PrimaryArtist: "",
    },
  ]);
  const [inputFields2, setInputFields2] = useState([
    {
      FeaturingArtist: "",
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
  const addInputField2 = () => {
    setInputFields2([
      ...inputFields2,
      {
        FeaturingArtist: "",
      },
    ]);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    const list2 = [...inputFields2];
    list[index][name] = value;
    setInputFields2(list2);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const removeInputFields2 = (index) => {
    const rows = [...inputFields2];
    rows.splice(index, 1);
    setInputFields2(rows);
  };
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
      <Link className="button1" to="/Songsinfo">
        Submission
      </Link>
      <div>
        <div
          style={{ margin: "0px", marginTop: "-30px", position: "absolute" }}
        >
          <SideBar />
        </div>
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
            <div style={{ fontSize: "80%" }}>
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
            {/* <input
            type="text"
            required="true"
            className="form-control"
            placeholder="Primary Artist"
            id="PrimaryArtist"
            value={PrimaryArtist}
            onChange={(e) => handleInputChange(e)}
          /> */}
          <select style={{position:'absolute',width:'420px',marginTop:'16px'}}
                      type="text"
                      className="form-select"
                      placeholder="Primary Artist"
                    >
                    <option value="Select">Primary Artist</option>
                    <option value="Select">A</option>
                    <option value="Select">B</option>
                    </select>
            {/* <div className="col-sm-8"> */}
            {inputFields.map((data, index) => {
              const { PrimaryArtist, emailAddress, salary } = data;
              return (
                <div className="row my-3" key={index}>
                  <div className="col-sm-11">
               
                    <input 
                      // type="hidden"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={PrimaryArtist}
                      name="PrimaryArtist"
                      className="form-control"
                      placeholder="Primary Artist"
                    />
                <button style={{position:'absolute',marginTop:'-2%',marginLeft:'22%'}}
                  className="btn btn-outline-success"
                  onClick={addInputField}
                >+
                </button>
                  </div>

                  <div className="col">
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

            {/* </div> */}

            <label className="lable">Featuring Artist*</label>
            {/* <input
              type="text"
              required="true"
              className="form-control"
              placeholder="Featuring Artist"
              id="FeaturingArtist"
              value={FeaturingArtist}
              onChange={(e) => handleInputChange(e)}
            /> */}
            <select style={{position:'absolute',width:'420px',marginTop:'16px'}}
                      type="text"
                      className="form-select"
                      placeholder="Featuring Artist"
                    >
                    <option value="Select">Featuring Artist</option>
                    <option value="Select">A</option>
                    <option value="Select">B</option>
                    </select>
                {inputFields2.map((data, index) => {
              const { FeaturingArtist, emailAddress, salary } = data;
              return (
                <div className="row my-3" key={index}>
                  <div className="col-sm-11">
               
                    <input 
                      // type="hidden"
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={FeaturingArtist}
                      name="FeaturingArtist"
                      className="form-control"
                      placeholder="FeaturingArtist"
                    />
                <button style={{position:'absolute',marginTop:'-2%',marginLeft:'22%'}}
                  className="btn btn-outline-success"
                  onClick={addInputField2}
                >+
                </button>
                  </div>

                  <div className="col">
                    {inputFields2.length !== 1 ? (
                      <button
                        className="btn btn-outline-danger"
                        onClick={removeInputFields2}
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
    </div>
  );
};

export default CreateRelease;
