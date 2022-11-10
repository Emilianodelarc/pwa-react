import React from 'react'
import { Button,Tooltip } from 'antd';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/AuthContext";
function User() {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };
  return (
    <>
        <Tooltip>
          <Button type="primary" shape='circle' onClick={handleLogout}>
          <i className="fas fa-sign-out-alt salida"></i>
          </Button>
        </Tooltip>
    </>
  )
}

export default User