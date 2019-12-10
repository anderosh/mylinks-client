import React, { useState } from 'react';
import { connect } from 'react-redux';
import { singUp } from '../../serverReq';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SingUp.scss';

const Login = ({ singUp }) => {
  const [name, setName] = useState();
  const [last_name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const newUser = {
    name,
    last_name,
    email,
    password
  };

  const handleName = event => {
    setName(event.target.value);
  };
  const handleLastName = event => {
    setLastName(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handelSubmit = event => {
    singUp(newUser);
    event.preventDefault();
  };

  return (
    <div className="singUpContainer">
      <Form onSubmit={handelSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Name"
            rows="1"
            onChange={handleName}
            required
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Last name"
            rows="1"
            onChange={handleLastName}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
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
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  singUp
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
