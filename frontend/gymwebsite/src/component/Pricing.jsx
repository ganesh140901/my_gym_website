import React from 'react'
import {Check} from 'lucide-react'
const Pricing = () => { 
  const pricing=[
    {
    imgUrl:"./pricing.jpg",
    title:"QUATERLY",
    price: 18000 ,
    length:3
  },
  {
    imgUrl:"./pricing.jpg",
    title:"HALFERLY",
    price: 18000 ,
    length:3
  },
  {
    imgUrl:"./pricing.jpg",
    title:"ANNUAL",
    price: 18000 ,
    length:3
  }
  ]
  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element=>{
            return (
              <div className="card" key={element.title}> 
              <img src={element.imgUrl} alt={element.title}/>
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3> 
                <p> For {element.length} Months</p>
                </div> 
                <div className="description">
                  <p>
                    <Check/> Equipment
                  </p> 
                  <p>
                    <Check/> All Day Training 
                  </p>
                  <p>
                    <Check/> 24*7 Customer Support 
                  </p>
                  <p>
                    <Check/> Free Rest Room
                  </p> 
                </div>
                </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Pricing