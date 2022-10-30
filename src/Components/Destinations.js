import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Destination from './Destination';
import axios from 'axios';

export default function Destinations() {

    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        // setData([])
        const load = async () => {
            await axios.get('http://localhost:4000/app/destinations')
                // .then((response) => response.json())
                .then((response) => {
                    setDestinations(response.data)
                    // console.log(destinations)
                })
        }
        load()
    })

    return (
        <div className='container' style={{"marginTop": "120px"}} >
            <h1 className='my-3'><u>Our Destinations</u></h1>
            <div className="row">
                {destinations.map((dest) => {
                    return <div className="col-md-4" key={dest._id}>
                        <Destination name={dest.name} desc={dest.desc} price={dest.price} photo={dest.photo}/>
                    </div>
                })}
            </div>
        </div>
    )

}