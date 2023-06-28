import React, { useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import Label from "./Label";

const PlatForm = () => {
  // const [UPCEAN, setUPCEAN] = useState(null);
  const [formData, setformData] = useState({
    Audio: "",
    CRBT: "",
    VideoPlatform: "",
  });

  const data = [
    {
      company1: "Spotify",
      company2: "iTunes/Apple music",
      company3: "Instagram & Facebook",
      company4: "TikTok, Resso, Luna",
      company5: "Shazam",
    },
    {
      company1: "Joox",
      company2: "YouTube Music",
      company3: "Amazon",
      company4: "Soundcloud",
      company5: "Pandora",
    },
    {
      company1: "Deezer",
      company2: "Tidal",
      company3: "iHeartRadio",
      company4: "ClaroMúsica",
      company5: "Saavn",
    },
    {
      company1: "Wynk",
      company2: "Ganna",
      company3: "Boomplay",
      company4: "Anghami",
      company5: "KKBox",
    },
    {
      company1: "NetEase",
      company2: "Tencent",
      company3: "Joox",
      company4: "Kuack Media",
      company5: "Yandex Music (beta)",
    },
    {
      company1: "Adaptr",
      company2: "Flo",
      company3: "Snapchat",
      company4: "MediaNet & many smaller outlets",
      company5: "FM Digital Stor maximizer",
    },
  ];
  const data1 = [
    {
      company1: "BSNL",
      company2: "AIRTEL",
      company3: "VI",
    },
  ];
  const data2 = [
    {
      company1: "MX Player",
      company2: "HungamA",
      company3: "Amazon",
      company4: "Tidal",
      company5: "Apple music",
    },
    {
      company1: "Boomplay",
      company2: "VI",
      company3: "Tencent",
      company4: "Facebook PMV",
      company5: "Vimeo",
    },
  ];
  console.log(formData);
  const handleSubmit = async (e) => {
    // console.log("DATAUser",data,
    //   data1,
    //   data2);
    fetch("http://192.168.54.153:5000/api/v1/createRelease/platformPost", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        Audio: data,
        CRBT: data1,
        VideoPlatform: data2,
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
      <div className="audio-list">
        <h4 style={{ fontSize: "30px" }}>Audio (120+)</h4>
        <table className="adioTable">
          <tbody>
            {data.map((item) => (
              <tr>
                <td>
                  <input
                    type="checkbox"
                    value={item.company1}
                    onChange={(e) => {
                      setformData(e.target.value);
                    }}
                    checked
                  ></input>
                  &nbsp;&nbsp;
                  <lable>{item.company1}</lable>
                </td>
                <td>
                  <input
                    type="checkbox"
                    value={item.company2}
                    onChange={(e) => {
                      setformData(e.target.value);
                    }}
                    checked
                  ></input>
                  &nbsp;&nbsp;
                  <lable>{item.company2}</lable>
                </td>
                <td>
                  <input
                    type="checkbox"
                    value={item.company3}
                    onChange={(e) => {
                      setformData(e.target.value);
                    }}
                    checked
                  ></input>
                  &nbsp;&nbsp;
                  <lable>{item.company3}</lable>
                </td>
                <td>
                  <input
                    type="checkbox"
                    value={item.company4}
                    onChange={(e) => {
                      setformData(e.target.value);
                    }}
                    checked
                  ></input>
                  &nbsp;&nbsp;
                  <lable>{item.company4}</lable>
                </td>
                <td>
                  <input
                    type="checkbox"
                    value={item.company5}
                    onChange={(e) => {
                      setformData(e.target.value);
                    }}
                    checked
                  ></input>
                  &nbsp;&nbsp;
                  <lable>{item.company5}</lable>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h4
            style={{ fontSize: "30px", marginTop: "40px", marginLeft: "-50px" }}
          >
            CRBT(2+)
          </h4>
          <table className="adioTable1">
            <tbody>
              {data1.map((item) => (
                <tr className="Audiotable">
                  <td>
                    <input
                      type="checkbox"
                      value={item.company1}
                      onChange={(e) => {
                        setformData(e.target.value);
                      }}
                      checked
                    ></input>
                    &nbsp;&nbsp;
                    <lable>{item.company1}</lable>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value={item.company2}
                      onChange={(e) => {
                        setformData(e.target.value);
                      }}
                      checked
                    ></input>
                    &nbsp;&nbsp;
                    <lable>{item.company2}</lable>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value={item.company3}
                      onChange={(e) => {
                        setformData(e.target.value);
                      }}
                      checked
                    ></input>
                    &nbsp;&nbsp;
                    <lable>{item.company3}</lable>
                  </td>
                  {/* <td>
                    <input type="checkbox" 
                                    value={item.company3}
                    onChange={(e) => {
                      setformData(e.target.value);
                    }}></input>&nbsp;&nbsp;
                    <lable>{item.company4}</lable>
                  </td> */}
                  {/* <td>
                    <input type="checkbox" 
                                    value={item.company4}
                    onChange={(e) => {
                      setformData(e.target.value);
                    }}></input>&nbsp;&nbsp;
                    <lable>{item.company5}</lable>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h4
            style={{ fontSize: "30px", marginTop: "40px", marginLeft: "90px" }}
          >
            Video Platform(8+)
          </h4>
          <table className="adioTable2">
            <tbody>
              {data2.map((item) => (
                <tr className="Audiotable">
                  <td>
                    <input
                      type="checkbox"
                      value={item.company1}
                      onChange={(e) => {
                        setformData(e.target.value);
                      }}
                      checked
                    ></input>
                    &nbsp;&nbsp;
                    <lable>{item.company1}</lable>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value={item.company2}
                      onChange={(e) => {
                        setformData(e.target.value);
                      }}
                      checked
                    ></input>
                    &nbsp;&nbsp;
                    <lable>{item.company2}</lable>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value={item.company3}
                      onChange={(e) => {
                        setformData(e.target.value);
                      }}
                      checked
                    ></input>
                    &nbsp;&nbsp;
                    <lable>{item.company3}</lable>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value={item.company4}
                      onChange={(e) => {
                        setformData(e.target.value);
                      }}
                      checked
                    ></input>
                    &nbsp;&nbsp;
                    <lable>{item.company4}</lable>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      value={item.company5}
                      onChange={(e) => {
                        setformData(e.target.value);
                      }}
                      checked
                    ></input>
                    &nbsp;&nbsp;
                    <lable>{item.company5}</lable>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            style={{ marginLeft: "300%", marginTop: "15%" }}
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

export default PlatForm;
