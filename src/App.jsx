import React from 'react';
import './index.css'
import Api from './Weatherapi/Api';
// import img from "./assets/Weather_img.jpg"

const App = () => {
  return (
    <div >
    {/* <img src={img} className='relative ' /> */}
    <Api />
    </div>
  
  )
}

export default App