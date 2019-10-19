import React, { Component } from 'react';
import { icons } from "../../helpers/images";


export default class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <form>
          <div>
            <img className="search-icon" src={icons.search} alt="search"/>
            <input className="search" type="text" placeholder="Search"/>
          </div>
        </form>
        <div className="alert-wrapper">
          <div className="notifications"><img src={icons.notification} alt="notification"/>
            <div className="bullet"></div>
          </div>
          <div className="messages"><img src={icons.email} alt="email"/></div>
        </div>
      </div>
    );
  }
}
