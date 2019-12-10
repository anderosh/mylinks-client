import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { shortenLink } from '../../serverReq';
import { format } from 'path';

const NewLink = ({ shortenLink }) => {
  const [url, setUrl] = useState();
  const [name, setName] = useState();

  const newLink = {
    url,
    name
  };

  const handleUrl = event => {
    setUrl(event.target.value);
  };
  const handleName = event => {
    setName(event.target.value);
  };
  const handelSubmit = event => {
    event.preventDefault();
    setName('');
    shortenLink(newLink);
  };

  return (
    <Form onSubmit={handelSubmit}>
      <h5>New short link</h5>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Url</Form.Label>
        <Form.Control as="textarea" rows="1" onChange={handleUrl} />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Name</Form.Label>
        <Form.Control as="textarea" rows="1" onChange={handleName} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Short Link
      </Button>
    </Form>
  );
};

const mapStateToProps = state => ({
  newLink: state.newLink
});

const mapDispatchToProps = {
  shortenLink
};

export default connect(mapStateToProps, mapDispatchToProps)(NewLink);
