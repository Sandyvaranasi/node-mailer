import React, { useEffect, useState } from 'react';

const LoginSuccess = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffeaa7',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.5s ease',
          animation: 'fadeIn 0.5s',
          transform: showAnimation ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <img
          src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-happy-logo-png-image_3629350.jpg"
          alt="Logo"
          style={{
            width: '100px',
            height: 'auto',
            marginBottom: '20px',
          }}
        />
         <h1 style={{ fontSize: '24px', color: 'blue', textAlign: 'center' }}>
          Login Successful
        </h1>
        <img
          src="https://media.tenor.com/i7-WXEFuzrsAAAAj/yay-hooray.gif"
          alt="Success Gif"
          style={{ width: '200px', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default LoginSuccess;
