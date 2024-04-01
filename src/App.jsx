import React from 'react';
import './index.css'
// import Api from './Components/Weatherapi/Api';
import WeatherApp from './Components/Weatherapi/WeatherApp';

// import img from "./assets/Weather_img.jpg"

const App = () => {
  return (
    <div >
    {/* <img src={img} className='relative ' /> */}
    {/* <Api /> */}
    <WeatherApp />
    </div>
  
  )
}

export default App