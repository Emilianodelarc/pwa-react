import React from 'react'
import medical from '../img/medical.png'
function Banner() {
  return (
    <>
        <div className="load">
            <i className="fa fa-heartbeat fa-3x"></i>
        </div>

        <center>  <h1 className='banner-load'>Keep beating... </h1></center>

        <p className='banner-p'>MMH obtains all the information 
        of studies, analyses, consultations
        throughout his life... 
        </p>
        <div className='banner-img'>
          <img src={medical} alt='medical'/>
        </div>
    </>
  )
}

export default Banner