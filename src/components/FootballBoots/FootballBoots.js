import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../styles/fb.css';

class FootballBoots extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            footwear: null
        };
    }

    async componentDidMount() {
        const footwear = (await axios.get('http://localhost:8081/products/fb'));
        this.setState({
            footwear: footwear.data.shoes
        });
    }

    render() {
        return(
            <div className="fbs">
                { this.state.footwear === null && <p>Loading...</p> }
                { this.state.footwear && this.state.footwear.map( ft => (
                    <div key={ft._id} className="fb">
                        <div className="shoesPhoto"></div>
                        <Link to={`/fb/${ft._id}`}>
                            <p className="shoesName">{ft.name}</p>
                        </Link>
                        <p className="shoesDescription">{ft.description}</p>
                    </div>
                )) 
                }
            </div>
        );
    }
}

export default FootballBoots;