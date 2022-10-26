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
  useEffect(() => {
    callPayment()
  })
  return (
    <>
      <div class="card" style={{"width": "18rem", "margin": "200px auto"}}>
        <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Name</h5>
            <h6 class="card-text">Description</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cost</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <Link to="/" class="btn btn-success">Book</Link>
            <Link to="/" class="btn btn-danger">Go Back</Link>
          </div>
      </div>
    </>
  )
}
