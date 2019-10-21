import React, {Component} from 'react';
import Iframe from 'react-iframe'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="main-overview">
                <Iframe url="http://localhost:2018/"
                        height="100vh"
                        allowFullScreen={true}
                        className="iframe"
                        />
            </div>
        );
    }
}