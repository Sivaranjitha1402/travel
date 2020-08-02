import React from 'react';
import './Everytag.scss'
function Everytag(props) {
        return (
            <div className="tags">
                <div className="tagtitle">
                    {props.name}
                </div>
                <div className="tags-flex">
                    {props.tags.map((element,i)=>(
                        <a href="https://google.com" key={i} className="backtag">{element}</a>
                    ))}
                </div>
               
            </div>
        )
    }

export default Everytag
