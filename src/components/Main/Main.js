import React, { useEffect } from 'react';
import NewLink from '../NewLink/NewLink';
import { getUserLinks, deleteLink } from '../../serverReq';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import './Main.scss';

const Main = ({ userLinks, getUserLinks, deleteLink }) => {
  const isLogIn = localStorage.getItem('token');

  const handleDelete = e => {
    deleteLink(e.target.name);
  };

  useEffect(() => {
    getUserLinks();
  }, []);

  return (
    <div className="mainContainer">
      <div className="newLinkContainer">
        <NewLink />
      </div>
      <div className="myLinksContainer">
        <h2>My Links</h2>
        <div className="links">
          {userLinks.map(link => (
            <div className="linkCard" key={link._id}>
              <h3>{link.name}</h3>
              <div className="urlAndButton">
                <a href={link.short_link}>{link.short_link}</a>
                <Button
                  variant="outline-danger"
                  size="sm"
                  name={link._id}
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userLinks: state.userLinks
});

const mapDispatchToProps = {
  getUserLinks,
  deleteLink
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
