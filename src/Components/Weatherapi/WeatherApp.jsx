import React, { useState } from "react";
import bgimg from "../assets/Weatherbg.jpeg";
import humidityicon from "../assets/humidityicon.png"
import windicon from "../assets/Windicon.png"
import axios from "axios";
// import "dotenv/config"
const WeatherApp = () => {
  const [city, setcity] = useState("");
  const [data, setdata] = useState();
  // const [alartmsg, setalartmsg] = useState();

  const weather = async (res) => {
    try {
      const responce = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bbbb48924609517a87421484b1cdea2`
       );
      setdata(responce.data);
      console.log(responce.data);
    } catch (err) {
      console.log(err);
      // setalartmsg("Please Enter a valid city name");
      alert("Please Enter a valid city name")
    }
  };

  return (
    <div>
      {/* <h1 className="text-7xl text-black">name :{process.env.REACT_APP_API_KEY}</h1> */}

      <div className="container mx-auto">
        <div className=" flex justify-center items-center mt-10 relative">
          <img
            src={bgimg}
            className="bg-cover w-[300px] md:w-[360px] lg:w-[400px]   h-[450px] md:h-[480px] lg:h-[530px]  rounded-2xl"
          />
        </div>

        <div className="text-black absolute  top-28  left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex relative">
            <input
              type="text"
              value={city}
              onChange={(c) => setcity(c.target.value)}
              placeholder="Enter a city name"
              className=" relative placeholder:text-base w-[220px] md:w-[250px]  lg:w-[280px] text-gray-600  rounded-full font-semibold outline-none pl-10 py-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="absolute ml-3 my-2 text-teal-400  w-5 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <button
              onClick={weather}
              className=" px-2 py-2 bg-teal-400 hover:bg-teal-200 text-white ml-3 rounded-full "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokewidth="1.5"
                stroke="currentColor"
                className="w-6 h-6  font-bold "
              >
                <path
                  strokelinecap="round"
                  strokelinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          {/* <h1
            id="alartmsg"
            className="absolute top-12 left-8 text-lg: text-red-700 font-bold"
          >
            {alartmsg}
          </h1> */}
          <div className=" absolute w-full mt-10 lg:mt-12  mx-atuo ">
            {data && (
              <div className="transition-all duration-1000">
                
                <div className=" flex mx-auto -mt-6 ">
                  <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    className=" w-36 lg:w-40 mx-auto  "
                  />
                </div>
                <div className=" -mt-10 lg:-mt-10 text-center font-semibold text-base   first-letter:capitalize text-white ">{data.weather[0].description}</div>
                <div > 
                  <div className="text-center  text-4xl  lg:text-4xl font-bold text-gray-700 ">
                    {data.main.temp}°c
                  </div>
                  <div className="text-center  text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-10  ">
                    {" "}
                    {data.name}, {data.sys.country}
                  </div>

                  <div className="flex lg:justify-between  ">
                  <div className="flex lg:-mr-3 ">
                     <img src={humidityicon} className="w-20 lg:w-28  " />
                    <h1 className="font-bold text-xl lg:text-2xl my-auto  text-gray-200  -ml-4 ">{data.main.humidity}%</h1>
                   
                  </div>
                  <div className="flex ml-10">
                     <img src={windicon} className="w-20 lg:w-28 " />
                    <h1 className="font-bold text-xl lg:text-2xl my-auto text-gray-200 -ml-3  ">{data.wind.speed} <span className="text-lg:">Km/hr</span></h1>
                   
                  </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
