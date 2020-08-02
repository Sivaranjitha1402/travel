import React, { useState } from 'react'
import './Best.scss'
import Details from '../../Components/Details/Details'
function Best() {
  // const [array1, setarray1] = useState()

  const [detail, setDetail] = useState(
    [
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      },
      {
        title: "Stay on the peak",
        description: "Watch the sun receding into the mountains at sunset",
        container: [
          {
            image: "https://dl.airtable.com/.attachments/2b9b68e81ed1725c7d8a87363b36c71c/4492e52f/suite-with-jaccuzzi.jpg",
            title: "Mount Xanadu Resort",
            description: "INR 7400 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/cad6e4764b3b7d82c9de2c4a5133ce72/6cdae63d/the-girassol-serviced.jpg",
            title: "The Girassol Serviced Villa",
            description: "EUR 3460 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/bb81277dbc4702d9ae4cfb07ddf692d1/8659466e/173990271.jpg",
            title: "The Woods Resorts",
            description: "USD 4219 /night"
          },
          {
            image: "https://dl.airtable.com/.attachments/6b9df0a5af45653bf2848629f0c66252/feca02f8/reception.jpg",
            title: "Banasura Hill Resort",
            description: "JPY 4332 /night"
          }]
      }
    ]
  )
  return (
    <div>
      <div className="best">
        <div className="best-heading">Best of Wayanad</div>
        <div className="best-subheading">Hand curated collections that are flavours of Wayanad</div>
      </div>
      <div>
        {
          detail.map((element, i) => (
            <Details key={i} detailtitle={element.title} detaildescription={element.description} detailcontainer={element.container} />
          ))
        }
      </div>

      <div className="tcontent">
        <div className="text-content">
          <div className="title">Best of tripadvisor</div>
          <span className="text-info">Top rated awarded stays by Tripadvisor</span>
        </div>
      </div>
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