import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        backgroundImage: 'url(https://www.leoedit.com/wp-content/uploads/2022/01/sean-benesh-VnmbcgAfL3Q-unsplash.jpg)',
        height: '100vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <h1 style={{ color: 'white' }}>SEND!</h1>
      <p style={{ color: 'white' }}>Click the button below to login!</p>
      <Button style={{ background: '#B38B6D', border: 'solid 1px black' }} type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
