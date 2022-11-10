import React, {useEffect} from 'react'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import {useUserAuth } from "../context/AuthContext"
import {useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  const { user  } = useUserAuth()

  useEffect(() => {
    if(user){
      navigate('/startet')
    }
  }, [])
  

  return (
    <>
      <Menu/>
      <Banner/>
    </>

  )
}

export default Home