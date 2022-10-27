import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Payment(props) {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({})

  const callPayment = async () => {
    try {
      const res = await fetch('http://localhost:4000/app/payment', {
        method: 'GET',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json()
      // console.log(data)
      setUserData(data)
      // navigate('/payment')


      if (res.status !== 200) {
        const error = new Error(res.error)
        throw error
      }
    }
    catch (error) {
      console.log(error);
      navigate('/login')
    }
  }

  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === '[object Date]'
  }

  function isObj(val) {
    return typeof val === 'object'
  }

  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val)
    } else {
      return val
    }
  }

  function buildForm({ action, params }) {
    const form = document.createElement('form')
    form.setAttribute('method', 'post')
    form.setAttribute('action', action)

    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', key)
      input.setAttribute('value', stringifyValue(params[key]))
      form.appendChild(input)
    })

    return form
  }

  function post(details) {
    const form = buildForm(details)
    document.body.appendChild(form)
    form.submit()
    form.remove()
  }


  const getData = (data) => {

    return fetch('http://localhost:4000/app/payment', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).catch(err => console.log(err))
  }



  const makePayment = () => {
    getData({ amount: 500, email: 'abc@gmail.com' }).then(response => {
      console.log(response)

      var information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response
      }
      post(information)

    })
  }

  useEffect(() => {
    callPayment()
  })
  return (
    <>
      <div className="card" style={{ "width": "18rem", "margin": "200px auto" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <h6 className="card-text">Description</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cost</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <button onClick={makePayment} className="btn btn-success">Book</button>
          <Link to="/destinations" className="btn btn-danger">Go Back</Link>
        </div>
      </div>
    </>
  )
}
