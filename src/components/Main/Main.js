import React, { useEffect } from 'react';
import { getUserLinks } from '../../serverReq';
import { connect } from 'react-redux';
import LinkCard from '../LinkCard/LinkCard';
import NewLink from '../NewLink/NewLink';
import './Main.scss';

const Main = ({ userLinks, getUserLinks }) => {
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
          {userLinks.length > 0 &&
            userLinks.map(link => <LinkCard link={link} key={link._id} />)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userLinks: state.userLinks
});

const mapDispatchToProps = {
  getUserLinks
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
