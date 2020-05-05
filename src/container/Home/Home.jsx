import React, { Component } from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import '../../index.css';

class Home extends Component {
    render() {
        return (
            <div className="card-columns">
                <YouTubeComp title="Card 1" desc="Desc 1" />
                <YouTubeComp title="Card 2" desc="Desc 2" />
                <YouTubeComp title="Card 3" desc="Desc 3" />
                <YouTubeComp title="Card 4" desc="Desc 4" />
                <YouTubeComp title="Card 5" desc="Desc 5" />
            </div>
        )
    }
}

export default Home;