import React from 'react'
import './Main.scss'
import Summary from '../../Components/Summary/Summary'
import QuickLink from '../../Components/QuickLink/QuickLink'

   function Main() {
        return (
            <div className="main">
                <div className="Heading">
                    Wayanad
                </div>
                <div className="summaries">
                    <Summary image="https://betterclub.codes/images/bd1258b659004f4f362c552aeaa6e20d.svg" title="15°C" description="Good for next 2 weeks"/>
                    <Summary image="https://betterclub.codes/images/72371d3d1f75e00fa40da67cd3e5fcae.svg" title="May" description="Good time to visit"/>
                    <Summary image="https://betterclub.codes/images/ea3cb1474a08fdc313ca6dd08813253c.svg" title="₹5,000" description="Avg. stay price for two"/>
                </div>
                <div className="quicklink">
                    <div className="quicklink-container">
                        <div className="quicks">
                        <QuickLink image="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/04/windflower-resort.jpg" title="All stays" description="Stays for quick getaways" />
                        </div>
                        <div className="quicks">
                        <QuickLink image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqDyRnrp74aSvLIxbidsn-4xjfEl1cNnEgM7azKg7gpLSk2bOnw" title="Ask question" description="Get help from experts"/>
                        </div>
                        <div className="quicks">
                        <QuickLink image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRda49g1I1CndiVC9arJrLoIY4_AMXRL6sLu-HN3-shafY23j3FJg" title="Travel products" description="For all travel needs"/>
                        </div>
                    </div>
                 
                </div>
            </div>
        )
    }


export default Main
