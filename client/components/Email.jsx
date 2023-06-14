import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a new context
const EmailContext = React.createContext();

export default function Email() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e, setEmailAndName) => {
    e.preventDefault();
    if (!validateEmail(email) || !validateName(fullName)) {
      alert('Please enter a valid email and name');
    } else {
      setEmailAndName(email, fullName); // Save email and name to context
      navigate('/otp');
    }
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
    <EmailContext.Provider value={{ email, fullName }}>
      <form onSubmit={(e) => handleSubmit(e, setEmailAndName)}>
        <input
          type="email"
          placeholder="Email"
          className="email-input"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Full Name"
          className="email-input"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </EmailContext.Provider>
  );
}


export const useEmailContext = () => useContext(EmailContext);

