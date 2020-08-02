import React,{useState} from 'react'
import './Top.scss'
import Toptag from '../../Components/Toptag/Toptag'
function Top () {
    const [tops, setTops] = useState(
        [
            {
                title:"Meppadi (14)",
                description:"Most scenic village of Wayanad. Nearby: Chembra Peak, Karpuzha dam, Meenmutty falls.",
                tag:["Forests","Mountain"]
            },
            {
                title:"Vythiri (11)",
                description:"Hill station town. Nearby: Banasura dam, Pookote lake.",
                tag:["Forests","Mountain"]
            },
            {
                title:"Kalpetta (7)",
                description:"Best base station for sightseeing. Mar-May are a popular time for sightseeing.",
                tag:["Sightseeing"]
            },
            {
                title:"Sultan Bathery (7)",
                description:"Great roads from Bangalore & closest as well. Nearby: Banasura dam & Edakkal caves.",
                tag:["Paddyfields","Sighseeing"]
            },
            {
                title:"Ambalavayal (6)",
                description:'A village close to Karapuzha dam, and hosts the "Wayanad Heritage Museum"',
                tag:["Mountain","Waterfront"]
            },
            {
                title:"Manandhavady (4)",
                description:"Closest town to the Kabini river. Nearby: Tholpetty Wild Life Sanctuary.",
                tag:["Kabini"]
            },
            {
                title:"Tariyod (4)",
                description:"Great resorts overlooking the Banasura hills & reservoir.",
                tag:["Mountain","Waterfront"]
            },
            {
                title:"Meenangadi (3)",
                description:"Serene village in Wayanad situated between Kalpetta and Sulthan Bathery.",
                tag:["Mountain"]
            }


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

