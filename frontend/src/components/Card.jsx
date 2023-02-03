import React, { useEffect, useState } from "react";
import axios from "axios";


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



    var url = `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&units=metric&appid=981d6e576e5fb2511ef89b408ce0a7fe`

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
            <div class="max-w-lg max-h-lg rounded overflow-hidden shadow-lg bg-gray-800 ">
                <div className="max-h-[200px] bg-white flex justify-center">
                    <h1 className="text-black text-8xl flex justify-center">{Temp}</h1>
                    <h1 className="text-2xl text-black">Cº</h1>
                </div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{Name}</div>
                <p class="text-black text-base">
                    {Desc}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
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