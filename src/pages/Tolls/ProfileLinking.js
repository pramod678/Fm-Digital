import React, { useEffect, useState } from "react";
import "./../Create-Release.css";
import SideBar from "../../components/Sidebar/SideBar";

const ProfileLinking = () => {
  const [formData, setformData] = useState({
    Selectrelease: "",
    SelectAudio: "",
    Selectplatform: "",
    FecebookLink: "",
    InstagramLink: "",
    createdAt: "",
  });
  const data = [
    {
      id: 1,
      ReleaseTitle: "hggsdhg",
      AudioTitle: "sonfgdg",
      Artist: "jhjdshjhsj",
      FB: "true",
      IG: "06-06-2023",
      Status: "hgdhg",
      Date: "07-07-2023",
    },
    {
      id: 2,
      ReleaseTitle: "hggsdhg",
      AudioTitle: "sonfgdg",
      Policy: "jhjdshjhsj",
      Date: "06-06-2023",
      URLs: "hgdhg",
    },
  ];
  // console.log("formData", formData);
  const handleSubmit = async (e) => {
    fetch("http://192.168.54.153:5000/api/v1/tools/profileLinkingPost", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        Selectrelease: formData.Selectrelease,
        SelectAudio: formData.SelectAudio,
        Selectplatform: formData.Selectplatform,
        FecebookLink: formData.FecebookLink,
        InstagramLink: formData.InstagramLink,
      }),
    })
      .then((res) => res.json())
      .then((Data) => {
        console.log(Data, "CreateSuccesfully");
        if (Data.status === "ok") {
          alert("Create Successful");
        } else {
          alert("Something went wrong");
        }
      });
  };
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
            // value={formData.PasteURL}
            onChange={(event) =>
              setformData((prev) => ({
                ...prev,
                Selectrelease: event.target.value,
              }))
            }
          >
            <option>Select release</option>
            <option value="dynamic">dynamic</option>
          </select>
          <label className="lable">Select platform*</label>

          <input
            type="url"
            className="form-control"
            placeholder="Make sure to enter the exact name of artist"
            // value={formData.PasteURL}
            onChange={(event) =>
              setformData((prev) => ({
                ...prev,
                Selectplatform: event.target.value,
              }))
            }
          ></input>
          <label className="lable">Instagram Link*</label>

          <input
            type="url"
            className="form-control"
            placeholder="Instagram Link"
            value={formData.InstagramLink}
            onChange={(event) =>
              setformData((prev) => ({
                ...prev,
                InstagramLink: event.target.value,
              }))
            }
          ></input>
        </div>
        <div className="label">
          <label className="lable">Select Audio*</label>
          <select
            className="form-select"
            value={formData.SelectAudio}
            onChange={(event) =>
              setformData((prev) => ({
                ...prev,
                SelectAudio: event.target.value,
              }))
            }
          >
            <option value="Select">Select Audio</option>
            <option value="Radish">Dynamic</option>
          </select>
          <label className="lable">Fecebook Link*</label>

          <input
            type="url"
            className="form-control"
            placeholder="Fecebook Link"
            value={formData.FecebookLink}
            onChange={(event) =>
              setformData((prev) => ({
                ...prev,
                FecebookLink: event.target.value,
              }))
            }
          ></input>

          <button
            onClick={() => handleSubmit()}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
          <div
            style={{
              position: "relative",
              marginLeft: "-140%",
              marginTop: "13%",
            }}
          >
            <h3>Your Profile Linking History</h3>
          </div>
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.ReleaseTitle}</td>
                <td>{item.AudioTitle}</td>
                <td>{item.Artist}</td>
                <td>{item.FB}</td>
                <td>{item.IG}</td>
                <td>
                  <input type="checkbox"></input>
                </td>
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
