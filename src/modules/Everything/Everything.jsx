import React, { Component } from 'react';
import './Everything.scss';
import Everytag from '../../Components/Everytag/Everytag';
class Everything extends Component {
    constructor(state) {
        super(state)
    
        this.state = {
             purpose:["Gateway(52)","Sightseeing(8)","Wellness(4)","Glamping(1)"],
             interest:["Mounatin(41)","Waterfront(21)","Peakstay(6)","Wildlife(4)","Nagarhole(1)"],
             traveller:["Family(60)","Couple(60)","Group(6)","Pets(5)","Senior Friendly(2)"],
             roomview:["Mountain View(33)","Plantation View(15)","Forest View(13)","Lake View(7)","Riverview(4)","Valley View(2)"],
             uniqueroom:["Wooden Cottage(6)","Treehouse(6)","Mudhouses(2)","Cavestay(1)"],
             uniquehotel:["Stream(10)","Infinity Pool(10)","Large Property(10)","Sparsely Distributed Rooms (8)","Farm(6)","Awesome View Area(5)","Waterfall(4)","Lots Of Activities(4)","Hanging Bridge(3)","Flora & Fauna(3)","Great Pool(2)","Great Spa(2)"],
             hotelmood:["Serene(21)","Homely(10)","Romantic(7)","Charming(5)","Quaint(3)","Visual Treat(2)"],
             hoteldecor:["Well Designed(7)","Modern(7)","Colonial(4)","Kerala Architecture(4)","Earthy(2)","Heritage(2)"],
             food:["Kerala Cuisine(8)","Great Food(8)","Organic(3)","CUstom Food(2)","Local Cuisine(2)"],
             activities:["Ayurvedic Spa(13)","Trekking(10)","Fishing(9)","Cycling(8)","Nature Walk(7)","Plantation Walk(7)","Bird Watching(5)","Badminton court(5)","Zipline(4)","Mountainbiking(3)","Bamboo Rafling(3)","Yoga(3)","Safari(3)","Naturalist(2)","Streamwalk(2)","Guided Walks(2)","Private Pedal Boating(2)","Hiking(2)"]
        }
    }
    
    render() {
        return (
           <div>
                <div className="everything">
                    <div className="everything-title">Everything Wayanad</div>
                    <div className="everything-description">Select the tags that you find interesting to get suggestions</div>
                </div>
                <div className="everytag">
                    <Everytag name="Purpose" tags={this.state.purpose}/>
                    <Everytag name="Interest" tags={this.state.interest} />
                    <Everytag name="Traveler" tags={this.state.traveller}/>
                    <Everytag name="Room View" tags={this.state.roomview} />
                    <Everytag name="Unique Room Type" tags={this.state.uniqueroom}/>
                    <Everytag name="Unique Hotel Feature" tags={this.state.uniquehotel}/>
                    <Everytag name="Hotel Mood" tags={this.state.hotelmood}/>
                    <Everytag name="Hotel Decor" tags={this.state.hoteldecor}/>
                    <Everytag name="Food" tags={this.state.food} />
                    <Everytag name="Activities" tags={this.state.activities}/>
                </div>
           </div>
        )
    }
}

export default Everything
