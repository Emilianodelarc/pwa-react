import React , { useState,useEffect } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'antd';
import {useUserAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

function CardsLoading() {
    const [loading, setLoading] = useState(true);
    const { user  } = useUserAuth()
    const navigate = useNavigate()
    useEffect(() => {
      if(user){
        setTimeout(() => {
            setLoading(false)
        }, 3000);
      }
    }, [])
    
  return (
    <>
    
    <div className='card-loading'>
        <Card style={{ width: 300, marginTop: 16 }} loading={loading} >
            <Meta
                avatar={<Avatar size={84} src="https://www.lupusasturias.org/data/fotos/noticias/g_20_historia_clinica_.png" />}
                title="Clinic History"
                description="This is the description"
            />
            
        </Card>
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
                avatar={<Avatar size={84} src="https://pro.docfav.com/blog/wp-content/uploads/2022/04/Psicologo-realizando-historia-clinica-a-su-paciente.png" />}
                title="Medical Consultations"
                description="This is the description"
            />
        </Card>
        <Card style={{ width: 300, marginTop: 16 }} loading={loading} onClick={()=> navigate('/listhospital')}>
            <Meta
                avatar={<Avatar size={84} src="https://www.nubimed.com/wp-content/uploads/medical-result.png" />}
                title="Medical Benefits"
                description="This is the description"
            />
        </Card>
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
                avatar={<Avatar size={84} src="http://www.admisiononline.cl/sitio/wp-content/uploads/enfermeria-cft-twk-.png" />}
                title="Studies, clinical analyzes"
                description="This is the description"
            />
        </Card>
    </div>
    
  </>

  )
}

export default CardsLoading

 {/* <Card
      style={{ width: 300, marginTop: 16 }}
    //   actions={[
    //     <SettingOutlined key="setting" />,
    //     <EditOutlined key="edit" />,
    //     <EllipsisOutlined key="ellipsis" />,
    //   ]}
    >
      <Skeleton loading={loading} avatar active>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
  </Card> */}