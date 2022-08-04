import React, { useState } from 'react'
import axios from 'axios'
import './WeatherApp.css'
function WeatherApp() {

    const [cityName,setCityName]=useState('');
    const [data,setData]=useState({
        temp:0,
        country:'-',
        humidity:0,
        temp_max:0,
        temp_min:0,
        description:"-"
    })

    const handleclick=(e)=>{
        e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cb8e0641dd7e3697b81cb6873008f5f8`).then((resp)=>{
           

          
       setData({
        temp:(resp.data.main.temp_min-273.15).toFixed(2),
        country: resp.data.sys.country,
        humidity:resp.data.main.humidity,
        temp_max:(resp.data.main.temp_max-273.15).toFixed(2),
        temp_min:(resp.data.main.temp_min-273.15).toFixed(2),
        description:resp.data.weather[0].description
       })
    })
    setCityName('')
   }

    
  return (
    <div>
        
        <div className='weatherbg'>
        <h1 className='heading'>
          WeatherApp
        </h1>
        <form action="" className='form' onSubmit={handleclick}>
           <input type="text" required  value={cityName} onChange={(e)=>setCityName(e.target.value)} /> <br />
           <button type='submit'  >Get Weather </button>
        </form>
        <div className='weatherDetailContainer'>
            <div className='box'>
               <h3>Description</h3><br />
              <p>{data.description}</p>
              </div>
           <div className='box'>
              <h3>Tempreture</h3><br />
              <p>{data.temp} °C</p>
           </div>
           <div className='box'> 
           <h3>Country</h3><br />
              <p>{data.country}</p>
           </div>
           <div className='box'>
              <h3>Max Tempreture</h3><br />
              <p>{data.temp_max} °C</p>
              </div>
           <div className='box'>
              <h3>Humidity</h3><br />
              <p>{data.humidity}</p>
            </div>
           <div className='box'><h3>Min Tempreture</h3><br />
              <p>{data.temp_min} °C</p>
              </div>
         </div> 
          
         
        </div>
         
    </div>
  )
}

export default WeatherApp
