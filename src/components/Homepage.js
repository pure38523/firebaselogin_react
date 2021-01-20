import React,{useState} from 'react'
import { useAuth } from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
export default function Homepage() {
    const [error,setError] = useState('')
    const { currentUser, logout } = useAuth();
    const history = useHistory()

    async function handleLogout(e){
    setError('')

    try{
        await logout()
        history.push('/login')
    }catch{
        setError("Failed to log out")
    }

    }
    return (
        <div>
            <h1>Homepage</h1>
            {error}
            <strong>Email:   </strong>{currentUser?.email}
            <div><button className="signin-upsubmit" onClick={handleLogout}>
              Log Out
            </button></div>
        </div>
            
    )
}
