import React from 'react';
import './WanderingSquares.css';

const wanderingSquares = () => {

    return (

        <div className="squares-container">
            <div className="squares-main">
                <span className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
        </div>
    );

}

export default wanderingSquares;