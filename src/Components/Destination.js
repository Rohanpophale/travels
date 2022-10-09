import React from 'react'

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


  return (
    <>
      <div className="col" style={{ "width": "80%", "margin": "30px auto" }}>
        <div className="card" style={{ "backgroundColor": "#ecf39e" }}>
          <img src={props.photo} className="card-img-top" alt="..." style={{ "height": "350px" }} />
          <div className="card-body">
            <h4 className="card-title" style={{ "color": "#132a13", "fontWeight": "bold" }}>{props.name}</h4>
            <p className="card-text" style={descStyle}>{props.desc}</p>
            <p className="card-text" style={priceStyle}>Price: Rs. {props.price}/-</p>
          </div>
        </div>
      </div>

    </>
  )
}