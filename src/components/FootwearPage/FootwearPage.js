import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Footwear from '../Footwear/Footwear';
import Review from '../Review/Review';

class FootwearPage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Footwear params={this.props.match.params}/>
        <Review/>
      </div>
    )
  }
}

export default FootwearPage;