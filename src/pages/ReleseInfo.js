import React, { useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";


const ReleseInfo = () => {
  const [UPCEAN, setUPCEAN] = useState(null);
  const [CLine, setCLine] = useState(null);
  const [PLine, setPLine] = useState(null);
  const [ReleaseDate, setReleaseDate] = useState(null);
  const [LabelName, setLabelName] = useState(null);
  const [SubGenre, setSubGenre] = useState(null);
  const [Genre, setGenre] = useState(null);
  const [FeaturingArtist, setFeaturingArtist] = useState([
    { FeaturingArtist: "" },
  ]);
  const [PrimaryArtist, setPrimaryArtist] = useState([{ PrimaryArtist: "" }]);
  const [ReleaseTitle, setReleaseTitle] = useState(null);
  const [ReleaseType, setReleaseType] = useState(null);
  const [ImageDocument, setImageDocument] = useState({ preview: "", data: "" });
  // alert(JSON.stringify(inputFields));
  // console.log("PrimaryArtist",PrimaryArtist);

  const addInputField = () => {
    setPrimaryArtist([
      ...PrimaryArtist,
      {
        PrimaryArtist: "",
      },
    ]);
  };
  const addInputField2 = () => {
    setFeaturingArtist([
      ...FeaturingArtist,
      {
        FeaturingArtist: "",
      },
    ]);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...PrimaryArtist];
    list[index][name] = value;
    setPrimaryArtist(list);
  };
  const removeInputFields = (index) => {
    const rows = [...PrimaryArtist];
    rows.splice(index, 1);
    setPrimaryArtist(rows);
  };
  const handleChange2 = (index, evnt) => {
    const { name, value } = evnt.target;
    const list2 = [...FeaturingArtist];
    list2[index][name] = value;
    setFeaturingArtist(list2);
  };

  const removeInputFields2 = (index) => {
    const rows = [...FeaturingArtist];
    rows.splice(index, 1);
    setFeaturingArtist(rows);
  };

  // formData.append("fileName", fileName);
  const handleSubmit = async (e) => {
    console.log("DATA------",JSON.stringify(PrimaryArtist),JSON.stringify(FeaturingArtist));
    let formData = new FormData();
    formData.append("ImageDocument", ImageDocument.data);
    formData.append("ReleaseType", ReleaseType);
    formData.append("ReleaseTitle", ReleaseTitle);
    formData.append("PrimaryArtist", JSON.stringify(PrimaryArtist));
    formData.append("FeaturingArtist", JSON.stringify(FeaturingArtist));
    formData.append("Genre", Genre);
    formData.append("SubGenre", SubGenre);
    formData.append("LabelName", LabelName);
    formData.append("ReleaseDate", ReleaseDate);
    formData.append("PLine", PLine);
    formData.append("CLine", CLine);
    formData.append("UPCEAN", UPCEAN);
    const res = await fetch(
      "http://192.168.1.119:5000/api/v1/createRelease/releseInfoPost",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((Data) => {
        console.log(Data, "CreateSuccesfully");
        if (Data.status === "ok") {
          alert("Create Successful");
        } else {
          alert("Something went wrong");
        }
      });
    // console.log("response",res);
    // if (response) setStatus(response.statusText)
  };
  const handleFileChange = (e) => {
    console.log("handleFileChange");
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImageDocument(img);
    // console.log(img,"img");
  };
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
              <img src="http://localhost:5000/releseInfo/ImageDocument_1687429659808.jpg" type="file" alt="Art Work"></img>
              <div className="ImageDocument" >
                <input accept="image/*" type="file" name='ImageDocument' onChange={handleFileChange} multiple />
              </div>
              {/* <div className="fileuploader"> */}
              {/* <input type='file' name='ImageDocument' onChange={handleFileChange}></input> */}

              {/* <FileUploader
                  multiple={true}
                  // handleChange={handleChange}
                  // value={ImageDocument}
                  // onChange={e => setImageDocument(e.target.files[0])} 
                  onChange={handleFileChange}
                  type="file" 
                  accept="image/*"
                  // onChange={(e) => {
                  //   setImageDocument(e.target.value);
                  // }}
                  
                  name="file"
                  types={fileTypes}
                /> */}
              {/* </div> */}
            </div>

            <div className="GUIDELINES">
              <ul style={{ fontSize: "10px" }}>
                {/* <h4>Use The lines in the box</h4> */}
                <h6>Artwork Guidelines</h6>
                <li>A minimum size of 3000 x 3000 pixels (a perfect square)</li>
                <li>A minimum resolution of 72dpi (we recommend 300dpi)</li>
                <li>RGB color mode (CMYK will not show up correctly)</li>
                <li>JPEG file format</li>
                <li>
                  Do not send us thumbnails, .png files or images smaller than
                  the requested size.”
                </li>
              </ul>
            </div>
          </div>

          <div>
            <label className="lable">Release Type*</label>
            <div style={{ fontSize: "80%" }}>
              <select
                className="optiontype"
                name="work_days"
                id="id_work_days"
                // value={ReleaseType}
                onChange={(e) => {
                  setReleaseType(e.target.value);
                }}
                // onChange={(e) => handleInputChange(e)}
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
              onChange={(e) => {
                setReleaseTitle(e.target.value);
              }}
              // onChange={(e) => handleInputChange(e)}
            />
            <label className="lable">Primary Artist*</label>
            {PrimaryArtist.map((data, index) => {
              const { PrimaryArtist } = data;
              return (
                <div className="row my-0" key={index}>
                  <div className="col-sm-8">
                    <input
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={PrimaryArtist}
                      name="PrimaryArtist"
                      className="form-select"
                      placeholder="Primary Artist"
                    />
                    <button
                      style={{
                        position: "relative",
                        marginTop: "-30%",
                        marginLeft: "105%",
                      }}
                      className="btn btn-outline-success"
                      onClick={addInputField}
                    >
                      +
                    </button>
                  </div>

                  <div className="Addclosebutton1">
                    {PrimaryArtist.length !== 1 ? (
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
            <label className="lable">Featuring Artist*</label>
            {/* <select
              style={{
                position: "absolute",
                width: "297px",
                marginTop: "16px",
              }}
              type="text"
              className="form-select"
              placeholder="Featuring Artist"
            >
              <option value="Select">Featuring Artist</option>
              <option value="Select">A</option>
              <option value="Select">B</option>
            </select> */}
            {FeaturingArtist.map((data, index) => {
              const { FeaturingArtist } = data;
              return (
                <div className="row my-0" key={index}>
                  <div className="col-sm-8">
                    <input
                      value={FeaturingArtist}
                      onChange={(evnt) => handleChange2(index, evnt)}
                      name="FeaturingArtist"
                      className="form-select"
                      placeholder="FeaturingArtist"
                    />
                    <button
                      style={{
                        position: "relative",
                        marginTop: "-30%",
                        marginLeft: "105%",
                      }}
                      className="btn btn-outline-success"
                      onClick={addInputField2}
                    >
                      +
                    </button>
                  </div>

                  <div className="Addclosebutton3">
                    {FeaturingArtist.length !== 1 ? (
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
            <select
              type="text"
              required="true"
              className="form-select"
              placeholder="Genre"
              id="Genre"
              // value={Genre}
              onChange={(e) => {
                setGenre(e.target.value);
              }}
              // onChange={(e) => handleInputChange(e)}
            >
              {" "}
              <option>Genre</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            <label className="lable">Sub Genre*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="Sub Genre"
              id="SubGenre"
              value={SubGenre}
              onChange={(e) => {
                setSubGenre(e.target.value);
              }}
              // onChange={(e) => handleInputChange(e)}
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
              onChange={(e) => {
                setLabelName(e.target.value);
              }}
              // onChange={(e) => handleInputChange(e)}
            />
            <label className="lable">Release Date*</label>
            <input
              type="date"
              required="true"
              className="form-control"
              placeholder="Release Date"
              id="ReleaseDate"
              value={ReleaseDate}
              onChange={(e) => {
                setReleaseDate(e.target.value);
              }}
              // onChange={(e) => handleInputChange(e)}
            />
            <label className="lable">PLine*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="P line"
              id="PLine"
              value={PLine}
              onChange={(e) => {
                setPLine(e.target.value);
              }}
              // onChange={(e) => handleInputChange(e)}
            />
            <label className="lable">C Line*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="C line"
              id="CLine"
              value={CLine}
              onChange={(e) => {
                setCLine(e.target.value);
              }}
              // onChange={(e) => handleInputChange(e)}
            />
            <label className="lable">UPC/EAN*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="000000000001"
              id="UPCEAN"
              value={UPCEAN}
              onChange={(e) => {
                setUPCEAN(e.target.value);
              }}
              // onChange={(e) => handleInputChange(e)}
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

export default ReleseInfo;
