import React, { useEffect, useState } from "react";
import "./Create-Release.css";
import { Link } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import Label from "./Label";

const platform = () => {
  //   const [platform, setPlatform] = useState("");
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
      <Link className="button1" to="/Submission">
        Submission
      </Link>
      {/* <ul class="audio-list">
        <li>
          <label style={{ fontSize: "30px" }} for="company1">
            Audio (190+)
          </label>
          <input type="checkbox" id="comapany1"></input>
        </li>
      </ul> */}
      <div style={{ position: "absolute", marginTop: "-30px" }}>
        <SideBar />
      </div>
      <div className="audio-list">
        <h4 style={{ fontSize: "30px" }}>Audio (120+)</h4>
        <table className="adioTable">
          <tbody>
            {data.map((item) => (
              <tr className="Audiotable">
                <td>
                  <input type="checkbox" checked></input>&nbsp;&nbsp;
                  <lable>{item.company1}</lable>
                </td>
                <td>
                  <input type="checkbox" checked></input>&nbsp;&nbsp;
                  <lable>{item.company2}</lable>
                </td>
                <td>
                  <input type="checkbox" checked></input>&nbsp;&nbsp;
                  <lable>{item.company3}</lable>
                </td>
                <td>
                  <input type="checkbox" checked></input>&nbsp;&nbsp;
                  <lable>{item.company4}</lable>
                </td>
                <td>
                  <input type="checkbox" checked></input>&nbsp;&nbsp;
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
                    <input type="checkbox" checked></input>&nbsp;&nbsp;
                    <lable>{item.company1}</lable>
                  </td>
                  <td>
                    <input type="checkbox" checked></input>&nbsp;&nbsp;
                    <lable>{item.company2}</lable>
                  </td>
                  <td>
                    <input type="checkbox" checked></input>&nbsp;&nbsp;
                    <lable>{item.company3}</lable>
                  </td>
                  <td>
                    {/* <input type="checkbox"></input>&nbsp;&nbsp; */}
                    <lable>{item.company4}</lable>
                  </td>
                  <td>
                    {/* <input type="checkbox"></input>&nbsp;&nbsp; */}
                    <lable>{item.company5}</lable>
                  </td>
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
                    <input type="checkbox" checked></input>&nbsp;&nbsp;
                    <lable>{item.company1}</lable>
                  </td>
                  <td>
                    <input type="checkbox" checked></input>&nbsp;&nbsp;
                    <lable>{item.company2}</lable>
                  </td>
                  <td>
                    <input type="checkbox" checked></input>&nbsp;&nbsp;
                    <lable>{item.company3}</lable>
                  </td>
                  <td>
                    <input type="checkbox" checked></input>&nbsp;&nbsp;
                    <lable>{item.company4}</lable>
                  </td>
                  <td>
                    <input type="checkbox" checked></input>&nbsp;&nbsp;
                    <lable>{item.company5}</lable>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

              </div>
    </div>
  );
};

export default platform;
