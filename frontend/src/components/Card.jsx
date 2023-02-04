import React, { useEffect, useState } from "react";
import axios from "axios";
import {useCookies} from 'react-cookie'


const Card = (props) => {

    //const [cookies, setCookie] = useCookies([]);

    // const handle = () => {
    //   setCookie(`${cityCode}`, data, { path: '/' });
    // };

    const[dt, setDt] = useState('');
    const[Temp, setTemp] = useState('');
    const[Name, setName] = useState('');
    const[Desc, setDesc] = useState('');
    const[Pressure, setPressure] = useState('');
    const[Humidity, setHumidity] = useState('');


    const API_KEY = process.env.REACT_APP_API_KEY
    var url = `https://api.openweathermap.org/data/2.5/weather?id=${props.location}&units=metric&appid=${API_KEY}`

    const setUNIXtime = (time) => {
      let unix_timestamp = time

      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(unix_timestamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      return formattedTime
    }

    const getData = async () => {
        axios.get(url).then((res) => {
            setName(res.data.name)
            setTemp(res.data.main.temp)
            setDesc(res.data.weather[0].description)
            setPressure(res.data.main.pressure)
            setHumidity(res.data.main.humidity)
            setDt(res.data.dt)
          })
    }


    useEffect(() => {
        getData();
      },[[]])


    return(
        <div>
            <div className="p-10">
            <div class="max-w-lg max-h-lg rounded overflow-hidden shadow-lg">
                <div className="max-h-[200px] bg-white/20 flex justify-center">
                    <h1 className="text-black text-8xl flex justify-center">{Temp}</h1>
                    <h1 className="text-2xl text-black">Cº</h1>
                </div>
            <div class="px-6 py-4  bg-black/80 ">
                <div class="font-bold text-xl mb-2">{Name}</div>
                <p class="text-white text-base">
                    {Desc}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2  bg-gray-800/50 ">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pressure {Pressure}hPa</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Humidity {Humidity}% </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Last Update {setUNIXtime(dt)}</span>
              </div>
            </div>
          </div>
        </div>      
    )
}

export default Card;