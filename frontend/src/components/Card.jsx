import React, { useEffect, useState } from "react";
import axios from "axios";
import {useApi} from '../components/Custom-Hook'


const Card = (props) => {


    const[Temp, setTemp] = useState('');
    const[Name, setName] = useState('');
    const[Desc, setDesc] = useState('');
    const[Min, setMin] = useState('');
    const[Max, setMax] = useState('');
    const[Pressure, setPressure] = useState('');
    const[Humidity, setHumidity] = useState('');
    const[Visibility, setVisibility] = useState('');
    const[Speed, setSpeed] = useState('');
    const[Degrees, setDegrees] = useState('');
    const[Sunrise, setSunrise] = useState('');
    const[Sunset, setSunset] = useState('');

    const API_KEY = process.env.REACT_APP_API_KEY
    var url = `https://api.openweathermap.org/data/2.5/weather?id=${props.location}&units=metric&appid=${API_KEY}`

    const getData = () => {
        axios.get(url).then((res) => {
            setName(res.data.name)
            setTemp(res.data.main.temp)
            setDesc(res.data.weather[0].description)
            setPressure(res.data.main.pressure)
            setHumidity(res.data.main.humidity)
            setVisibility(res.data.visibility)
          })
    }


    useEffect(() => {
        getData();
      },[])

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
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Visibility {Visibility}km</span>
              </div>
            </div>
          </div>
        </div>      
    )
}

export default Card;