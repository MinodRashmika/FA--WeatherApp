import React from "react";
import { Navbar, Footer, Card } from "../components/"

const MultiCardUI = () => {

  var newList = [
    {"CityCode":"1248991","CityName":"Colombo","Temp":"33.0","Status":"Clouds"},
    {"CityCode":"1850147","CityName":"Tokyo","Temp":"8.6","Status":"Clear"},
    {"CityCode":"2644210","CityName":"Liverpool","Temp":"16.5","Status":"Rain"},
    {"CityCode":"2988507","CityName":"Paris","Temp":"22.4","Status":"Clear"},
    {"CityCode":"2147714","CityName":"Sydney","Temp":"27.3","Status":"Rain"},
    {"CityCode":"4930956","CityName":"Boston","Temp":"4.2","Status":"Mist"},
    {"CityCode":"1796236","CityName":"Shanghai","Temp":"10.1","Status":"Clouds"},
    {"CityCode":"3143244","CityName":"Oslo","Temp":"-3.9","Status":"Clear"}]

  
  // const[location, setLocation] = useState('');
  // const[weatherData, setData] = useState('');

  
  // const setLocations = (loc) => {
  //   setLocation(loc)
  // }

  // useEffect(() => {
  //   setLocation('');
  // },[])

  // var url = '';

  // const setURL = () => {
  //   url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=981d6e576e5fb2511ef89b408ce0a7fe`
  // }
  
  // const getData = () => {
  //   setURL()
  //   axios.get(url).then((res) => {
  //     setData(res.data)
  //   })
  // }
  
  // useEffect(() => {
  //   getData();
  // },[])

    return (
      
        <div className="app m-0 p-0 bg-backdrop bg-repeat bg-w-full bg-center bg-fixed min-h-full" >

          <Navbar/>


          <div className="grid grid-cols-1 gap-0 justify-items-center mx-12 md:grid-cols-2 lg:grid-cols-3">
          {
            newList.map(item => {
              return(
              <div>
                <Card location = {item.CityCode}/>
              </div>)
            })
          }

          </div>  


          {/*           
          <div className="grid grid-cols-1 gap-0 justify-items-center mx-12 md:grid-cols-2">
            <div><Card name={weatherData.name} desc = {weatherData.weather[0].description} temp = {weatherData.main.temp}/></div>
            <div><Card location='Kuala Lampur'/></div>
            <div><Card location='New Delhi'/></div>
            <div><Card location='Singapore'/></div>
            <div><Card location='Philadelphia'/></div>

          </div> */}

          <Footer />
        </div>
          
    )

} 

export default MultiCardUI