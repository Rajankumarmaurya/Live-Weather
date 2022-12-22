import axios from "axios";
import React, { useEffect, useState } from "react";
import './index.css'

function App() {
  const apiKey ="dffbfeb9fb22ca721e348df98c926cec"
  const [inputCity, setInputCity] = useState("")
const [data ,setData] = useState({})

const getWeatherDetails =(cityname)=>{
  if(!cityname)return
  const apiURL ="https://api.openweathermap.org/data/2.5/weather?q="+ cityname +" &appid="+apiKey
  axios.get(apiURL).then((res)=>{
    console.log(res.data)

    setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
  })
}
const handle=(e)=>{
  setInputCity(e.target.value)
}
const Enter=()=>{
getWeatherDetails(inputCity)
}





  return (
    <>
      <div className="col-md-12">
        <div className="weatherBG">
          <h1 className="heading">Weather App</h1>
          <div className="d-grid gap-3 col-4 mt-4">
            <input type="text" className="form-control" value={inputCity} onChange={handle} />
            <button onClick={Enter} className="btn btn-primary">Search</button>
          </div>
        </div>

        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
          <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="" />
          <h5 className="weathercity">{data?.name}</h5>
          <h6 className="Temp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
