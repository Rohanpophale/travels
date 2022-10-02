import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:4000/app/logout')
        navigate('/', { replace: true })
    })

    return (

        <div />

    )

}