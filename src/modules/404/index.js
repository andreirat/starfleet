import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h3>
          No match for <code>{window.location.pathname}</code>
        </h3>
      </div>
    );
  }
}
