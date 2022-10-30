import React from 'react'
import { Link } from 'react-router-dom'
import Payment from './Payment'

export default function Destination(props) {

  const descStyle = {
    "fontSize": "15px",
    "color": "#132a13",
    "textAlign": "left"
  }

  const priceStyle = {
    "fontSize": "20px",
    "padding": "0",
    "color": "#132a13",
    "textAlign": "left"
  }

  const callPaymentComponent = (e) => {
    e.preventDefault()
    return <Payment name={props.name} />
  }

  return (
    <>
      <div className="col" style={{ "width": "80%", "margin": "30px auto" }}>
        <div className="card" style={{ "backgroundColor": "#ecf39e" }}>
          <img src={props.photo} className="card-img-top" alt="..." style={{ "height": "350px" }} />
          <div className="card-body">
            <h4 className="card-title" style={{ "color": "#132a13", "fontWeight": "bold" }}>{props.name}</h4>
            <p className="card-text" style={descStyle}>{props.desc}</p>
            <p className="card-text" style={priceStyle}>Price: Rs. {props.price}/-</p>
            <button type='submit' onClick={callPaymentComponent} className="btn btn-success" style={{ "backgroundColor": "#132a13" }}>Book Now</button>
          </div>
        </div>
      </div>

    </>
  )
}