import React from 'react';
import Card from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LinkCard = ({ link }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{link.name}</Card.Title>
      <Card.Text>{link.url}</Card.Text>
      <Button variant="primary">{link.short_link}</Button>
    </Card.Body>
  </Card>
);

export default LinkCard;
