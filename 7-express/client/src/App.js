import React, {useState} from "react"
import {API} from "./api/api.js"

function App() {
  const [location ,setLocation] =   useState("")
  const [weather, setWether] = useState("")
  const [notFound, setNotFound] = useState("")

  const getWeather = (e) => {
    e.preventDefault();
    API.getWeather(`weather/${location}`)
    .then((res)=>{
      setWether(res.data)
      setNotFound("")
    })
    .catch((err)=>{
      setNotFound(err.response.data.message);
    });
  };
  return (
    <div>
	

      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {notFound && <h1>{notFound}</h1>}
      {weather.city && (
        <div>
          <h1>
            {weather.city}, {weather.country}
          </h1>
          <h2>{weather.temp}</h2>
          <h3>{weather.description}</h3>
          </div>
      )}    
      </div>
  );
}

export default App;
