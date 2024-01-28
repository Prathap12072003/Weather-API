import React, { useState } from "react";
import axios from "axios";
import { WiHumidity } from "react-icons/wi";
import celcius from '../assets/celsius-degree-removebg.png'
// import Weather_img from "../assets/Weather_img.jpg"
// import weatherimg from './weatherimg/'

const Api = () => {
  const [city, setcity] = useState("");
  const [data, setdata] = useState();
  const [weatherdata, setweatherdata] = useState();

  const weather = async (res) => {
    try {
      const responce = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bbbb48924609517a87421484b1cdea2`
      );
      setdata(responce.data);
      setweatherdata({ summa: responce.data.weather[0].description });
      console.log(responce.data);
    } catch (err) {
      alert("Plece Enter The Valid City Name");
    }
  };
  // let showhide=document.querySelector("#show_hide");
  //   let isshow=true;
  //   function hidden(){
  //     if(isshow){
  //       showhide.style.display="none";
  //       isshow=false;
  //     }else{
  //       showhide.style.display="block";
  //       isshow=true;
  //     }
  //   }
  // let a=1;
  // const hide=()=>{
  //   if(a==1){
  //     document.getElementById('show_hide').style.display="inline"
  //     return a=0;
  //   }
  //   else{
  //     document.getElementById('show_hide').style.display="none"
  //    }
  // }

  return (
    <div className="container mx-auto ">
    
      <h1 className="text-3xl w-full md:text-4xl text-blue-500 font-bold text-center mt-52 mx-auto">
        Weather App
      </h1>
      <div className="flex flex-wrap mt-4">
        <div className="mx-auto">
          <input
            className=" border-2 border-blue-400 pl-3 sm:pl-3 p-1 sm:p-[2px] text-gray-600 placeholder:text-base placeholder:text-gray-400 sm:placeholder:text-lg placeholder:font-normal text-base sm:text-lg font-semibold outline-none mx-auto hover:border-blue-600 hover:shadow-md   shadow-blue-300  "
            value={city}
            onChange={(c) => setcity(c.target.value)}
            placeholder="Enter the city name"
          />

          <button
            className="mt-4 px-2 border-2 border-blue-400 bg-blue-400 hover:shadow-lg   hover:bg-blue-600 text-white text-lg  shadow-sm shadow-blue-300 font-semibold mx-auto w-20 md:w-20 h-[35px] ml-2"
            onClick={weather}
          >
            Click
          </button>
        </div>
      </div>

      <div id="show_hide" className="flex justify-center mt-5 text-gray-800 ">
        {data && (
          <div className="border bg-blue-300 rounded-md shadow-xl w-[280px] sm:w-80 py-5 text-center">
            <div className="text-3xl  sm:text-4xl font-extrabold  inline-flex mx-auto">
              <h1>{data.name}, {data.sys.country}</h1>
              {/* <h1 className="px-5"></h1> */}
            </div>
            <p className="text-2xl font-bold  font-righteous text-gray-700  mt-3">
              {data.weather[0].main},{data.weather[0].description}
            </p>
            <div className="text-lg font-semibold pl-2 text-gray-700 mt-1 flex  w-[180px] mx-auto ">
              <div >
              <WiHumidity className=" mt-1 text-3xl text-blue-600  mx-auto " />
              </div>
           
            <p className=" mt-1 font-semibold">Humidity : {data.main.humidity}%</p>
            </div>
          

            <div className="text-xl font-semibold mt-[-2px] text-gray-700  flex w-[115px] mx-auto  pl-3">
              <p className="mx-auto mt-2  ">{data.main.temp}</p>
              <p ><img src={celcius}  /></p>
            </div>
            
            <p className="text-xl font-semibold text-gray-700 mt-1">
              Lon:{data.coord.lon} Lat:{data.coord.lat}
            </p>
            <p className="text-xl font-semibold text-gray-600 mt-3">
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Api;
