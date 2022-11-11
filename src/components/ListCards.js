import React,{useEffect,useState} from 'react'
import { Card} from 'antd';


function ListCards({datos, loading}) {
   
    



  return (

    <div className="cardList">
    {    datos.map(item=>
            <Card key={item.rnos} title={item.rnos} hoverable={true} bordered={false} style={{ width: 300 }} loading={loading}>
            <p>{item.denominacion}</p>
            <p>{item.domicilio}</p>
            <p>{item.provincia}</p>
            </Card>

    )}
    
  </div>
  )
}

export default ListCards