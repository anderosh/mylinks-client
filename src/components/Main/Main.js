import React, { useEffect } from 'react';
import NewLink from '../NewLink/NewLink';
import { getUserLinks } from '../../serverReq';
import { connect } from 'react-redux';

const Main = ({ userLinks, getUserLinks }) => {
  useEffect(() => {
    getUserLinks();
  }, []);
  return (
    <>
      <h2>New Link</h2>
      <NewLink />
      <h2>My Links</h2>
      <p>This are your links</p>
      {userLinks.map(link => (
        <div key={link._id}>
          <h3>{link.name}</h3>
          <p>{link.short_link}</p>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = state => ({
  userLinks: state.userLinks
});

const mapDispatchToProps = {
  getUserLinks
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
