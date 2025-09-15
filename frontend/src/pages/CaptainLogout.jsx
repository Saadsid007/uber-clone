import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CaptainLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const effectRan = useRef(false)

    useEffect(() => {
        if (effectRan.current) return
        axios.post(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .catch(() => {})
        .finally(() => {
            localStorage.removeItem('token')
            navigate('/captain-login')
        })

        effectRan.current = true
        return () => { effectRan.current = true }
    }, [token, navigate])

    return (
        <div>ACaptainLogout</div>
    )
}

export default CaptainLogout