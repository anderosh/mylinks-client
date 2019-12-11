import React from 'react';
import { deleteLink } from '../../serverReq';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import './LinkCard.scss';

const LinkCard = ({ link, deleteLink }) => {
  const handleDelete = e => {
    deleteLink(e.target.name);
  };
  return (
    <div className="linkCard" key={link._id}>
      <h3 className="link-title">{link.name}</h3>
      <div className="urlAndButton">
        <a href={link.short_link} target="_blank">
          {link.short_link}
        </a>
        <Button
          variant="outline-danger"
          size="sm"
          name={link._id}
          onClick={handleDelete}
        >
          <i className="far fa-trash-alt"></i>
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteLink
};

export default connect(null, mapDispatchToProps)(LinkCard);
