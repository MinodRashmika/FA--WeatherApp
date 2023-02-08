import React, { useEffect, useState } from "react";
import axios from "axios";


const Card = (props) => {

    const date = new Date().getTime()
    
    // const[newData, setNewData] = useState();
    // const[Temp, setTemp] = useState('');

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
  
      const city = window.localStorage.getItem(`${props.location}`);

      if(city) {
        if(new Date().getTime() > JSON.parse(city).expDate){
          window.localStorage.removeItem(`${props.location}`);
          axios.get(url).then((res) => {
            localStorage.setItem(`${props.location}`, JSON.stringify({
              name: res.data.name,
              temp: res.data.main.temp,
              desc: res.data.weather[0].description,
              pressure: res.data.main.pressure,
              humidity: res.data.main.humidity,
              dt: res.data.dt,
              expDate: date + (60000*5) //setting to (60000 * 5) will give 5 mins
            }))
          })
          console.log('expired')
        } else {
          console.log('all good')
          axios.get(url).then((res) => {
            console.log('name = ' + res.data.name + ' & temp = ' + res.data.main.temp + 'ºC updated at ' + setUNIXtime(res.data.dt))
          })
        }
      } else {
        axios.get(url).then((res) => {
          localStorage.setItem(`${props.location}`, JSON.stringify({
            name: res.data.name,
            temp: res.data.main.temp,
            desc: res.data.weather[0].description,
            pressure: res.data.main.pressure,
            humidity: res.data.main.humidity,
            dt: res.data.dt,
            expDate: date + (60000*5) //setting to (60000 * 5) will give 5 mins
          }))
        })
      }
    }

    const cities = JSON.parse(window.localStorage.getItem(`${props.location}`));

    useEffect(() => {
      // axios.get(url).then((res) => {setTemp(res.da)})
      getData();    
    },[])

    return(
        <div>
            <div className="p-10">
              {console.log('expiring time = ' + new Date(cities.expDate))}
            <div class="max-w-lg max-h-lg rounded overflow-hidden shadow-lg">
                <div className="max-h-[200px] bg-white/20 flex justify-center">
                    <h1 className="text-black text-8xl flex justify-center">{cities.temp}</h1>
                    <h1 className="text-2xl text-black">ºC</h1>
                </div>
            <div class="px-6 py-4  bg-black/80 ">
                <div class="font-bold text-xl mb-2">{cities.name}</div>
                <p class="text-white text-base">
                    {cities.desc}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2  bg-gray-800/50 ">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pressure {cities.pressure}hPa</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Humidity {cities.humidity}% </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Last Update {setUNIXtime(cities.dt)}</span>
              </div>
            </div>
          </div>
        </div>      
    )
}

export default Card;