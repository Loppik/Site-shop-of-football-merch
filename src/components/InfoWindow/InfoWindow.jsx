import React, { Component } from 'react';

import './infoWindow.css';

class InfoWindow extends Component {
  render() {
    const { text } = this.props;
    let hidden = true;
    if (text != '') {
      hidden = false;
    }
    return (
        <div className="infoWindow" hidden={hidden}>
          <div className="innerWindow">
            <p>{text}</p>
          </div>
        </div>
    )
  }
}

export default InfoWindow;
