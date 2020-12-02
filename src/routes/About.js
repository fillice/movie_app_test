import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "built it for just fun."
            </span>
            <span>-noman-</span>
        </div>
    );
}

export default About;