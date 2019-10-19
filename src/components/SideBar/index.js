import React, { Component } from 'react';
import { images } from "../../helpers/images";
import { Link } from "react-router-dom";
import { EuiIcon } from '@elastic/eui';

export default class TopBar extends Component {
  render() {
    // const { user } = this.props;
    return (
      <div className="sidebar-container">
          {/*TODO: uncomment this if we need user avatar */}
        {/*<div className="profile">*/}
        {/*  <div className="profile-img">*/}
        {/*    <img src={images.profile} alt="cross"/>*/}
        {/*  </div>*/}
        {/*  <h1 className="user-name">{`${user.first_name} ${user.last_name}`}</h1>*/}
        {/*</div>*/}
        <div>
          <img src={images.login.logoGrey} className="sidebar-logo" alt="cross"/>
        </div>
        <ul className="menu">
          <ul className="menu">
            <li><Link to="/">Solar system</Link></li>
            <li><Link to="/">Galaxies</Link></li>
            <li><Link to="/">Superclusters</Link></li>
            <li><Link to="/">Open issues</Link></li>
          </ul>
          <div>
            <button className="primary-button"><Link to="/ship">Add ship</Link> </button>
          </div>
        </ul>

        <div className="sidebar-footer">
          <div className="settings"><EuiIcon type="user" color="primary" size="xl" /></div>
          <div className="settings"><EuiIcon type="popout" color="primary" size="xl" /></div>
        </div>
      </div>
    );
  }
}
