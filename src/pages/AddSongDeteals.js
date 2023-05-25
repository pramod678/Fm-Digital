import React, { useState } from "react";
import "./Create-Release.css";
import Popup from 'reactjs-popup';
import { Link } from "react-router-dom";
const CreateRelease = () => {
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

  return (
    <div>
      {isOpen && (
        <div className="overlay">
          <div className="form-container">
            <h2>Enter Your Details</h2>
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
                type="text"
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
  );
};

export default CreateRelease;

