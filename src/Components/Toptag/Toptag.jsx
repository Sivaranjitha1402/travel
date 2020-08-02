import React from 'react'
import './Toptag.scss'
function Toptag (props) {
        return (
            <div className="toptag">
                <a href="https://google.com"className="topTitle">
                    {props.title}
                </a>
                <div className="topDescription">
                       {props.description}
                </div>
                <a href="https://google.com" className="manytag">
                {
                    props.tag.map((element,i)=>(
                        <div className="tags" key={i}>
                            {element}
                        </div>
                        ))
                }
                </a>
              
            </div>
        )
    }


export default Toptag
