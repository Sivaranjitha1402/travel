import React from 'react'
import './ImageHolder.scss'
import { Rate } from 'antd';
function ImageHolder(props) {
  
 var price=props.contain.description.split(" ");
 var num = price[1]==="reviews" ? price[0]:new Number(price[1]).toLocaleString('en-US',{
    style: "currency",
    currency: price[0],
    minimumFractionDigits: 0 
  });
  var des=price[1]==="reviews"?props.contain.description:num.concat(price[2])
        return (
           
            <div className="imageholder">
                <a href="https://www.google.com/">
                    <div className="water">
                        <img src={props.contain.image} alt="images" className="fits"/>
                        <div id="watermark">
                            <img id="watermark-logo" src={require("../../assets/watermark.svg")}/>
                        </div>
                    </div>
                </a>
                <div className="title">{props.contain.title}</div>
                <div>
                <Rate allowHalf defaultValue={props.contain.value} />

                </div>
                <div className="description">{des}</div>
            </div>
            
        )
    }

export default ImageHolder
