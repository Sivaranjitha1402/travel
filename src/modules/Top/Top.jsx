import React,{useState} from 'react'
import './Top.scss'
import Toptag from '../../Components/Toptag/Toptag'
function Top () {
    const [tops, setTops] = useState(
        [
            {
                title:"Comedy (14)",
                description:"Find your favourite comedy shows",
                tag:["Stand ups","Cuts"]
            },
            {
                title:"Thriller (11)",
                description:"Have a nail bitting scenerio",
                tag:["Detective","Ghosts"]
            },
            {
                title:"Romance (7)",
                description:"Have a good time with your loved one",
                tag:["Tender"]
            },
            {
                title:"Kids (7)",
                description:"Give kids a pleasant watch",
                tag:["Animation","Movie"]
            },
            


        ]);
        return (
            <div className="tops">
                <div className="heading">
                    Top neighborhoods in Wayanad
                </div>
                <div className="tagcards">
                {
                    tops.map((element,i)=>(
                        <Toptag key={i} title={element.title} description={element.description} tag={element.tag}/>
                    ))
                }
                </div>
            </div>
        )
    }


export default Top;

