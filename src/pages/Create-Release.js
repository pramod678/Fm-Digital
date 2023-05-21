import React, { useState } from "react";
import "./Create-Release.css";
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
    <div className="row">
    <div className="col-75">
    <div className="container">
        <form>
        <div className="row">
          <div className="col-50">
            <label className="ta-3">Release Type*</label>
            <div className="ReleaseType">
              <select
                className="optiontype"
                name="work_days"
                id="id_work_days"
                multiple
              >
                <option value="1">EP</option>
                <option value="2">Single</option>
                <option value="3">Album</option>
                <option value="4">Component</option>
              </select>
            </div>
            </div>
          </div>
          
          <div className="row">
          <div className="col-50">
          <h4>Release Info</h4>
            <label >Release Title*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="Release Title"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </div>

          <div className="row">
          <div className="col-50">
            <label>Primary Artist*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="Primary Artist"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </div>
          <div className="row">
          <div className="col-50">
            <label>Featuring Artist*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="Featuring Artist"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </div>
          <div className="row">
          <div className="col-50">
            <label>genre*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="genre"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </div>
          <div className="row">
          <div className="col-50">
            <label>Sub Genre*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="Sub Genre"
              // onChange={(e) => setPassword(e.target.value)}
            />
            </div>
          </div>
          <div className="row">
          <div className="col-50">
            <label>Label Name*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="Label Name"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </div>
          <div className="row">
          <div className="col-50">
            <label>Release Date*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="Release Date"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </div>
          <div className="row">
          <div className="col-50">
            <label>P line*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="C line"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </div>
          <div className="row">
          <div className="col-50">
            <label>C line*</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="C line"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          </div>
          <div className="row">
          <div className="col-50 " >
            <label>UPC/EAN</label>
            <input
              type="text"
              required="true"
              className="form-control"
              placeholder="UPC/EAN"
              // onChange={(e) => setPassword(e.target.value)}
            />
            
            </div>
          </div>
          <br/>
          <div className="row">
          <div className="col-50">
          
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CreateRelease;
