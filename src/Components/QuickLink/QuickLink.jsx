import React from 'react'
import './QuickLink.scss'
function QuickLink (props) {
        return (
            <a href="https://google.com" className="Quicklink">
                <div className="img">
                    <img src={props.image} alt="quick"/>
                </div>
                <div className="contains">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="description">
                        {props.description}
                    </div>
                </div>
            </a>
        )
    }


export default QuickLink
