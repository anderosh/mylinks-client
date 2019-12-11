import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginReq } from '../../serverReq';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.scss';

export const Login = ({ loginReq }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const credentials = {
    email,
    password
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handelSubmit = event => {
    loginReq(credentials);
    event.preventDefault();
  };

  return (
    <div className="loginContainer">
      <Form onSubmit={handelSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="sing-up-text">
          Don't have an account? <a href="/sing-up">Sing up</a>
        </p>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loginReq
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
