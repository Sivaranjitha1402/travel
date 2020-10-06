import React, { useState } from 'react'
import './Best.scss'
import Details from '../../Components/Details/Details'
function Best() {
  // const [array1, setarray1] = useState()

  const [detail, setDetail] = useState(
    [
      {
        title: "Top Hits",
        description: "Watch the top hits of your favourite shows",
        container: [
          {
            image: "data:image/jpeg;base64,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",
            title: "Fandango",
            description: "INR 400 /show",
            value:"3.0"

          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrb8GG_fP5Xx6ARbh-yLvSwgawQPjTNkGnFg&usqp=CAU",
            title: "The end game",
            description: "EUR 30 /show",
            value:"4.5"
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsWOm5NTuowsXhAM0gf5Uo8ptK-H_ldIJYeA&usqp=CAU",
            title: "The Frozen II",
            description: "USD 19 /show",
            value:"5"
          },
          {
            image: "data:image/jpeg;base64,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 ",
            title: "Asuran",
            description: "INR 432 /show",
            value:"3.5"
          }]
      },
    ]
  )
  return (
    <div>
      <div>
        {
          detail.map((element, i) => (
            <Details key={i} detailtitle={element.title} detaildescription={element.description} detailcontainer={element.container} />
          ))
        }
      </div>

      {/* <div className="tcontent">
        <div className="text-content">
          <div className="title">Best of tripadvisor</div>
          <span className="text-info" id="top">Top rated awarded stays by Tripadvisor</span>
        </div> */}
      {/* </div> */}
    </div>
  )
}
export default Best;
                /* <div className="tecontent">
      <img src="https://a0.muscache.com/im/pictures/983064a1-3271-4fc0-9978-20f51bd9e6de.jpg"/>
      <div className="tex-content">
        <div className="title">Best of tripadvisor</div>
        <span className="text-info">Top rated awarded stays by Tripadvisor</span>
      </div>
</div> */