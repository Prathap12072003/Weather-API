import React, { useState } from "react";
import axios from "axios";
// import Weather_img from "../assets/Weather_img.jpg"
// import weatherimg from './weatherimg/'

const Api = () => {
  const [city, setcity] = useState("");
  const [data, setdata] = useState();

  const weather = async (res) => {
    try {
      const responce = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bbbb48924609517a87421484b1cdea2`
      );
      setdata(responce.data);
      console.log(responce.data)
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
    <div className="container mx-auto p-20" >
    {/* <img src={Weather_img}/> */}
   
        <h1 className="text-4xl text-blue-500 font-bold text-center mt-52 mx-auto">
          Weather App
        </h1>
        <div className="flex flex-wrap mt-4 w-1/2  mx-auto">
          <div className="mx-auto">
            <input
              className=" border pl-4 text-gray-600 placeholder:text-lg placeholder:font-normal text-lg font-semibold outline-none border-blue-300 mx-auto hover:border-blue-600 hover:shadow-md   shadow-blue-300 "
              value={city}
              onChange={(c) => setcity(c.target.value)}
              placeholder="Enter the city name"
            />

            <button
              className="mt-4 px-2  bg-blue-400 hover:shadow-lg  border hover:border-blue-600 text-white text-lg  shadow-sm shadow-blue-300 font-semibold mx-auto w-20 h-15 ml-2"
              onClick={weather}>
              Click
            </button>
           
          </div>
        </div>
     
      <div id="show_hide"  className="flex justify-center mt-5 text-gray-800 ">
        
        {data && (
          <div className="border  bg-blue-400 rounded-md shadow-xl w-80 py-5 text-center">
            <div className="text-3xl font-bold inline-flex mx-auto">
              <h1>{data.name},</h1>
              <h1 className="px-5">{data.sys.country}</h1>
            </div>
            <p className="text-xl font-semibold text-gray-600 mt-3">
              {data.main.temp}'C
            </p>
            <p className="text-xl font-semibold text-gray-600 mt-1">
              Lon:{data.coord.lon} Lat:{data.coord.lat}
            </p>
          </div>
        )}
      </div>
      </div>
    


     
  );
};

export default Api;
