import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Email() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validateName(fullName)) {
      alert('Please enter a valid email and name');
    } else {
      axios
        .post('http://localhost:3000/api/sendMail', { email, fullName })
        .then(() => navigate('/otp'))
        .catch((error) => alert(error.response.data.message));
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateName = (name) => {
    const namePattern = /^[A-Za-z\s-]+$/;
    return namePattern.test(name);
  };

  return (
    <div className="container">
      <div className="content">
        <img src={'https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg'} alt="Log in Logo" className="logo" />
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Email"
            className="email-input"
            onChange={handleEmail}
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            className="email-input"
            value={fullName}
            onChange={handleFullName}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
