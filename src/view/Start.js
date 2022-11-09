import React, {useState, useEffect} from 'react'
import Intro from '../components/Intro'
import Home from './Home'

function Start() {
    const [start, setStart] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setStart(true)
      }, 3000);
    
     
    }, [])
    
  return (
    <>

    {start ? <Home/> : <Intro/>}
    
    </>
  )
}

export default Start