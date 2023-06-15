import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Otp() {
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const navigate = useNavigate()

  const handleChange = (index, value) => {
    const updatedOtpDigits = [...otpDigits];
    updatedOtpDigits[index] = value;
    setOtpDigits(updatedOtpDigits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = otpDigits.join('');
    axios.post('http://localhost:3000/api/auth',{OTP:otp})
    .then(()=>alert('success !!!'))
    .catch(error=>alert(error.response.data.message))
  };

  const handleResend = () => {
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="otp-container">
        {otpDigits.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="otp-input"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            required
          />
        ))}
      </div>
      <div className="button-container">
        <button type="submit" className="button">Submit</button>
        <button type="button" onClick={handleResend} className="button">Change Email</button>
      </div>
    </form>
  );
}
