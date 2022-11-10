import React from 'react'
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    const volver=()=>{
        navigate("/");
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Upss.. Hubo un problema!"
            extra={<Button onClick={()=>volver()} type="primary">Volver</Button>}
        />
    );
};
export default Error;