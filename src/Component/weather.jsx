import { useState } from "react"
import axios from "axios"


function Weather() {


      const [city,setcity] = useState("")

      const[weather,setWeather] = useState("")
      const[temp,setTempp] = useState("")
      const[desc,setDesc] = useState("")

      function handleCity(evt){

         setcity(evt.target.value)
      }

      function getWeather(){

         var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45bc973ac09d6cca70e3e2118c652345`)

         weatherdata.then(function(Success){

            console.log(Success.data)

            setWeather(Success.data.weather[0].main)
            setDesc(Success.data.weather[0].description)
            setTempp(Success.data.main.temp)
         })
      }


   return (
      <div className="overall-container">

         <div className="weather-report">

            <div>

            <h1 className="title">Weather Report</h1>
            <p className="pp">I can give you a weather report about your city !!</p>
            <input onChange={handleCity} type="text" className="enterbox" placeholder="Enter city Name"></input>
            <button   onClick={getWeather}    className="reportbutton">Get Report</button>

            </div>
            <div>
            <div className="title-2">

               <h1><b>Weather: </b>{weather}</h1>
               <p><b>Temperature: </b>{temp}</p>
               <p><b>Description: </b>{desc}</p>

            </div>
            </div>
         </div> 


     </div>
   )

}


export default Weather