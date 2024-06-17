import React, { useState } from 'react';
import '../Style/Form.css'

function Form() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    address: "",
    location:""
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", user);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <h1>This is Form</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='fname' value={user.fname} onChange={handleInput} placeholder='First Name'/><br/>
        <input type='text' name='lname' value={user.lname} onChange={handleInput}  placeholder='Last Name'/><br/>
        <input type='number' name='mobile' value={user.mobile} onChange={handleInput}  placeholder='Mobile No.'/><br/>
        <input type='email' name='email' value={user.email} onChange={handleInput}  placeholder='Email'/><br/>
        <input type='text' name='address' value={user.address} onChange={handleInput}  placeholder='Address'/><br/>
        <input type='text' name='location' value={user.location} onChange={handleInput}  placeholder='location'/><br/>
        <button type='submit'>Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Form Submitted Successfully!</h2>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
