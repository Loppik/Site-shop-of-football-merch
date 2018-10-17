import React, {Component} from 'react';
import axios from 'axios';

class Footwear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footwear: null
        };
        
    }

    async componentDidMount() {
        const params = this.props.match.params;
        const fb = (await axios.get(`http://localhost:8081/fb/${params.fbId}`));
        this.setState({
            footwear: fb.data
        });
    }

    render() {
        const fb = this.state.footwear;
        if (fb === null) return <p>Loading ...</p>;
        return (
          <div>
                <h1>{fb.name}</h1>
                <p>{fb.description}</p>
                <br/>
                <p>Reviews:</p>
                {
                  fb.reviews.map((review, id) => (
                    <p key={idx}>{review}</p>
                  ))
                }
          </div>
        )
      }
}

export default Footwear;