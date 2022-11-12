import React from 'react'
import { useUserAuth } from "../context/AuthContext";

function Greeting() {
    const {user } = useUserAuth();

  return (
    <div className='card-loading'>
        <h1>Hello {user && user.displayName }</h1>
    </div>
  )
}

export default Greeting