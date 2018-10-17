import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class FootballBoots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footwear: null
        };
    }

    async componentDidMount() {
        /*
        const footwear = (await axios.get('http://localhost:8081/'));
        this.setState({
            footwear: footwear.data
        });
        */
    }

    render() {
        return(
            <div>
                { this.state.footwear === null && <p>Loading...</p> }
                { this.state.footwear && this.state.footwear.map( ft => (

                    <div key={ft.id}>
                        <Link to={`/fb/${ft.id}`}>
                            <div>
                                <h1>{ft.name}</h1>
                                <p>{ft.description}</p>
                            </div>   
                        </Link>
                    </div>
                )) 
                }
            </div>
        );
    }
}

export default FootballBoots;