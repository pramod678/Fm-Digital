import React, { useEffect, useState } from "react";
import "./../Create-Release.css";
import SideBar from "../../components/Sidebar/SideBar";

const YoutubeClaims = () => {
  const [formData, setformData] = useState({
    Selectrelease: "",
    SelectAudio: "",
    Selectplatform: "",
    SelectPolicy: "",
    PasteURL: "",
  });
  const data = [
    {
      id: 1,
      ReleaseTitle: "hggsdhg",
      AudioTitle: "sonfgdg",
      Policy: "jhjdshjhsj",
      Date: "06-06-2023",
      URLs: "hgdhg",
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
  // console.log("formData",formData);
  const handleSubmit = async (e) => {
    fetch("http://192.168.54.153:5000/api/v1/tools/youtubeClaimsPost", {
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
        SelectPolicy: formData.SelectPolicy,
        PasteURL: formData.PasteURL,
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
      <h3 className="catalogs">Youtube Claims</h3>
      <div className="flex-container1">
        <div className="youtube">
          <label className="lable">Select release*</label>

          <select
            className="form-select"
            onChange={(event) =>
              setformData((prev) => ({
                ...prev,
                Selectrelease: event.target.value,
              }))
            }
          >
            <option>Select release</option>
            <option value="A">A</option>
          </select>
          <label className="lable">Select platform*</label>

          <select
            className="form-select"
            onChange={(event) =>
              setformData((prev) => ({
                ...prev,
                Selectplatform: event.target.value,
              }))
            }
          >
            <option>Select platform</option>
            <option value="A">Youtube Content ID</option>
          </select>
          <label className="lable">Paste URL*</label>

          <input
            type="url"
            className="form-control"
            value={formData.PasteURL}
            onChange={(event) =>
              setformData((prev) => ({ ...prev, PasteURL: event.target.value }))
            }
          ></input>
        </div>
        <div className="label">
          <label className="lable">Select Audio*</label>
          <select
            className="form-select"
            // value={formData.PasteURL}
            onChange={(event) =>
              setformData((prev) => ({
                ...prev,
                SelectAudio: event.target.value,
              }))
            }
          >
            <option>Select Audio</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          <label className="lable">Select Policy*</label>

          <select
            className="form-select"
            // value={formData.PasteURL}
            onChange={(event) =>
              setformData((prev) => ({
                ...prev,
                SelectPolicy: event.target.value,
              }))
            }
          >
            <option>Select Policy</option>
            <option value="Monetize">Monetize</option>
            <option value="Remove">Remove</option>
            <option value="Block">Block</option>
          </select>

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
            <h3>Your UGC Claims History</h3>
          </div>
        </div>

        <table className="table1">
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
                <td>
                  <input type="checkbox"></input>
                </td>
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
