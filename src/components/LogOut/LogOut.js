import React from 'react';
import Button from 'react-bootstrap/Button';

const LogOut = () => {
  const handelClick = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Button href="/Login" onClick={handelClick} variant="outline-primary">
        Logout
      </Button>
    </div>
  );
};

export default LogOut;
