import './IconHolder.scss'
// import Details from '../../Components/Details/Details'
// import React ,{useState} from 'react'
import React from 'react';
function IconHolder() {
// const [array, setarray] = useState([
//     {
//       image:"https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
//       title:"Mount Xanadu Resort",
//       description:"USD 7400 /night"
//     },
//     {
//       image:"https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
//       title:"The Girassol Serviced Villa",
//       description:"EUR 3460 /night"
//     },
//     {
//       image:"https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
//       title:"The Woods Resorts",
//       description:"INR 4219 /night"
//     },
//     {
//       image:"https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
//       title:"Banasura Hill Resort",
//       description:"EUR 4332 /night"
//      }]) 
//      console.log(setarray)
    return (
        <div>
             <div className="IconHolder">
                    <div className="four-icons">
                        <img src="https://bestofwayanad.com/assets/icons/rectangle-copy-6@2x.png" alt="1"/>
                        <img src="https://bestofwayanad.com/assets/icons/rectangle-copy-8@2x.png" alt="2"/>
                        <img src="https://bestofwayanad.com/assets/icons/rectangle-copy-9@2x.png" alt="3"/>
                        <img src="https://bestofwayanad.com/assets/icons/rectangle@2x.png" alt="4"/>
                    </div>
                    <div className="title">What people look for in Wayanad</div>
                    <div className="description">What do you feel like having in your next trip? Tell us and we would get you the right options for stays and destinations.</div>
                </div>
                {/* <div className="expert">
                    <div className="reviews">
                        <div className="images">
                            <img src="https://betterclub.codes/assets/icons/favicon.png"height="30" width="30" alt="images"/>
                        </div>
                        <div className="text-info">
                            <span className="description">1 Expert</span>
                            <span className="description">&nbsp;&nbsp;  •  &nbsp;&nbsp;</span>
                            <span className="description">1 Recommendation</span>
                        </div>
                    </div>
                    <div className="titles">
                        Good stay for couple for 2 nights. Which has..
                    </div>
                    <ul className="questions">
                        <li>
                          Forest view room in some peaceful environment.
                        </li>
                        <li>
                            Preferably not too much away from main city.
                        </li>
                        <li>
                            Cost isn't much of an issue.
                        </li>
                        <li>
                           Boutique hotels are preferable.
                        </li>
                    </ul>               
                </div>
                <div className="details">
                    <Details  detailcontainer={array}/>
                </div> */}
                <div className="ask-btn">
                    <p>Ask a question</p>
                </div>
        </div>
    )
}
export default IconHolder;