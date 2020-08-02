import React from 'react'
import ImageHolder from '../ImageHolder/ImageHolder'
import './Details.scss'
function Details(props) {
    return (
        <div className="detail">
            <div className="detail-main">
                <div className="detail-main-title">{props.detailtitle}</div>
                <div className="detail-main-description">{props.detaildescription}</div>
            </div>
            <div className="detail-container">
                {
                    props.detailcontainer.map((element, i) => (
                        <ImageHolder key={i} contain={element} />
                    ))
                }
                <div className="spacing"></div>
            </div>
            <a href="https://google.com" className="detail-more">See all</a>
        </div>
    )
}


export default Details

