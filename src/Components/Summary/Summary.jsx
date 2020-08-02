import React from 'react'
import './Summary.scss'
function Summary (props) {
        return (
            <div className="summary">
                <img src={props.image} alt="sum1"/>
                <div className="summary-container">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="description">
                        {props.description}
                    </div>
                </div>
            </div>
        )
    }

export default Summary
