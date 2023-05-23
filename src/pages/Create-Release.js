import React, { useState } from "react";
import "./Create-Release.css";
import Label from './Label';
// const COLORS = ['white', 'red', 'blue', 'black', 'cream'];
const CreateRelease = () => {
  // const [values, setValues] = useState({
  //   name: '', color: '', age: '', habits: ''
  // });

  // const set = name => {
  //   return ({ target: { value } }) => {
  //     setValues(oldValues => ({...oldValues, [name]: value }));
  //   }
  // };

  return (
    <div className="mai-nev">
       <input className="button1" type='button'  value="Release Info"/>
       <input className="button1" type='button'  value="Song Info"/>
       <input className="button1" type='button'  value="Platform"/>
       <input className="button1" type='button'  value="Submission"/>

  
    <div className="flex-container">
      <div>
        <div className="box">
        <img src="pic_trulli.jpg" type='file' alt="Italian Trulli"></img>
        </div>
        <input style={{fontSize:'20px',marginTop:'10px'}} type='file'></input>
        <h4 style={{color:'DarkTurquoise' ,textAlign:'center',marginTop:'10px'}}>ARTWORK GUIDELINES</h4>
        {/* <input
          type="file"
          required="true"
          className="form-control"
          placeholder="Release Title"
          // onChange={(e) => setEmail(e.target.value)}
        /> */}
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
            <option  value="EP">EP</option>
            <option value="Single">Single</option>
            <option value="Album">Album</option>
            <option value="Component">Component</option>
          </select>
        </div>

        {/* <h4>Release Info</h4> */}
        <label className="lable">Release Title*</label>
        <input
          type="text"
          required="true"
          className="form-control"
          placeholder="Release Title"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label className="lable">Primary Artist*</label>
        <input
          type="text"
          required="true"
          className="form-control"
          placeholder="Primary Artist"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label className="lable">Featuring Artist*</label>
        <input
          type="text"
          required="true"
          className="form-control"
          placeholder="Featuring Artist"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label className="lable">Genre*</label>
        <input
          type="text"
          required="true"
          className="form-control"
          placeholder="Genre"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label className="lable">Sub Genre*</label>
        <input
          type="text"
          required="true"
          className="form-control"
          placeholder="Sub Genre"
          // onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="label">
        <label className="lable">Label Name*</label>
        <input
          type="text"
          required="true"
          className="form-control"
          placeholder="Label Name"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <label className="lable">Release Date*</label>
        <input
          type="date"
          required="true"
          className="form-control"
          placeholder="Release Date"
          // onChange={(e) => setPassword(e.target.value)}
        />
        <label className="lable">Line*</label>
        <input
          type="text"
          required="true"
          className="form-control"
          placeholder="P-Line"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label className="lable">C Line*</label>
        <input
          type="text"
          required="true"
          className="form-control"
          placeholder="C-Line"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label className="lable">RUPC/EAN*</label>
        <input
          type="text"
          required="true"
          className="form-control"
          placeholder="RUPC/EAN"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </div>
    </div>
  );
};

export default CreateRelease;
