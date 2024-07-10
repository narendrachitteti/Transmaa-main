import React from 'react'
import { ClipLoader } from 'react-spinners'
import Transblack from '../../images/TransmaBlack.png'

const PreLoader = () => {
    
  return (
    <div className='PreLoaderConainer'>
    
     
      <ClipLoader color="#e95d08"  size={120} speedMultiplier={0.5} />
      <img src={Transblack} alt="" />

       {/* <h1  style={{fontSize:'96px', color:'#e95d08',marginTop:'3rem'}}  >T R A N S M A A </h1> */}
      {/* <h1  style={{fontSize:'24px', color:'black',marginTop:'1rem'}}  >T R A N S P O R T A T I O N </h1> */}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw', 
    position: 'fixed', 
    top: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.7)', 
    zIndex: 9999, 
  }
}

export default PreLoader
