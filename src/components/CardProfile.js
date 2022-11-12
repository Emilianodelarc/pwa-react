import React,{useEffect} from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
function CardProfile() {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate()
    const urlImg = 'https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png'

    useEffect(() => {
      if(!user){
        navigate('/')
      }
    }, [])
    
  return (
    <div className="card-profile">
    <form >
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img src={user.photoURL ? user.photoURL : urlImg}/>
        </div>
      </label>
      <div className="name">{user.displayName ? user.displayName : ''}</div>
      <div className="status">{user.email ? user.email : ''}</div>
      <button type="submit" className="edit" onClick={logOut}>Log Out</button>
    </form>
  </div>
  )
}

export default CardProfile