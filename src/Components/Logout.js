import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:4000/app/logout', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((response) => {
            navigate('/', { replace: true })
            if (response.status !== 200) {
                const error = new Error(response.error)
                throw error
            }
        }).catch((error) => {
            console.log(error)
        })
    })

    return (

        <div />

    )

}