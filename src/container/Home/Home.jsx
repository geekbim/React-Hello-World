import React, { Component } from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>YouTube Component</h1><hr/>
                <div className="card-columns">
                    <YouTubeComp title="Card 1" desc="Desc 1" />
                    <YouTubeComp title="Card 2" desc="Desc 2" />
                    <YouTubeComp title="Card 3" desc="Desc 3" />
                    <YouTubeComp title="Card 4" desc="Desc 4" />
                    <YouTubeComp title="Card 5" desc="Desc 5" />
                    <YouTubeComp />
                </div>

                <h1>Count Component</h1><hr/>
                <Product/>
            </div>
        )
    }
}

export default Home;