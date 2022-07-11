import { useState } from "react";
import "./App.css";
import constants from "./constants";
import useAlan from "./hooks/useAlan";
import WeatherData from "./WeatherData";

function App() {
  const [place, setPlace] = useState("");
  const [weatherData, setWeatherData] = useState();

  useAlan({ fetchWeather });

  const handleChange = (e) => {
    setPlace(e.target.value);
  };

  async function fetchWeather(place) {
    let PLACE_URL = `${constants.BASE_URL}${constants.GET_PLACE_DATA_ENDPOINT}${place}`;
    const placeResponse = await fetch(PLACE_URL);
    const placeData = await placeResponse.json();
    if (placeData.length) {
      let weatherURL = `${constants.BASE_URL}${placeData[0].woeid}/`;
      const weatherResponse = await fetch(weatherURL);
      const _weatherData = await weatherResponse.json();
      setWeatherData(_weatherData);
      return _weatherData;
    }
  }

  const getWeather = async () => {
    fetchWeather(place);
  };

  return (
    <div className="background">
      
      <div className="App">
        <h2>Type in the name of your place to get instant weather updates!</h2>
        <div className="container">
          <div>
            <span>🔍</span>
            <input value={place} onChange={handleChange} type="text" />
          </div>
          <button onClick={getWeather}>Get Weather!</button>
        </div>
        {weatherData && <WeatherData weatherData={weatherData} />}
      </div>
      <div class="container services_container">
        <div className="card1">
        <div className="Day-1">
          <h2>{weatherData.consolidated_weather[1].applicable_date}</h2>
          
          <div className="main">
            <img
              src={`${constants.IMG_URL}${weatherData.consolidated_weather[1].weather_state_abbr}.svg`}
            />
            <p>
              <strong>
              It's{" "}
              <span>
                {weatherData.consolidated_weather[1].the_temp} &#8451;{" "}
              </span>
              predicted{" "}
              <span>
                {weatherData.consolidated_weather[1].weather_state_name}
              </span>
              </strong>
            </p>
          </div>
          <div className="header">
            <p>
              
            <span>
              <strong>Place:</strong> {weatherData.title},{" "}
              {weatherData.parent.title}
            </span>
            
            </p>
            <p>
            <span>
              <strong>Timezone:</strong> {weatherData.timezone}
            </span>
            </p>
          </div>
          <div className="weather-info">
                <p>
                   <strong>Max/Min: </strong> 
                   <span>
                       {weatherData.consolidated_weather[1].max_temp.toString().slice(0,5)}
                       &#8451;/{weatherData.consolidated_weather[1].min_temp.toString().slice(0,5)} 
                       &#8451;
                    </span>
                </p>
                <p>
                   <strong>Humidity: </strong> 
                   <span>
                   {weatherData.consolidated_weather[1].humidity.toString().slice(0,5)}
                        &#37;
                       
                    </span>
                </p>
                <p>
                   <strong>Wind Speed: </strong> 
                   <span>
                   {weatherData.consolidated_weather[1].wind_speed.toString().slice(0,5)}
                        mph;
                    </span>
                </p>
                <p>
                   <strong>Wind Direction: </strong> 
                   <span>
                   {weatherData.consolidated_weather[1].wind_direction.toString().slice(0,5)}
                        &#176;
                    </span>
                </p>
                <p>
                   <strong>Air Pressure: </strong> 
                   <span>
                   {weatherData.consolidated_weather[1].air_pressure.toString().slice(0,5)}
                    mbar
                    </span>
                </p>
          </div>
        </div>
        </div>

        <div className="card2">
        <div className="Day-2">
          <h2>{weatherData.consolidated_weather[2].applicable_date}</h2>
          <div className="main">
            <img
              src={`${constants.IMG_URL}${weatherData.consolidated_weather[2].weather_state_abbr}.svg`}
            />
            <p>
              <strong>
              It's{" "}
              <span>
                {weatherData.consolidated_weather[2].the_temp} &#8451;{" "}
              </span>
              predicted{" "}
              <span>
                {weatherData.consolidated_weather[2].weather_state_name}
              </span>
              </strong>
            </p>
          </div>
          <div className="header">
          <p>
            <span>
              
              <strong>Place:</strong> {weatherData.title},{" "}
              {weatherData.parent.title}
            </span>
            </p>
            <p>
            <span>
              <strong>Timezone:</strong> {weatherData.timezone}
            </span>
            </p>
          </div>
          <div className="weather-info">
          <p>
                   <strong>Max/Min: </strong> 
                   <span>
                       {weatherData.consolidated_weather[2].max_temp.toString().slice(0,5)}
                       &#8451;/{weatherData.consolidated_weather[2].min_temp.toString().slice(0,5)} 
                       &#8451;
                    </span>
                </p>
            <p>
                   <strong>Humidity: </strong> 
                   <span>
                   {weatherData.consolidated_weather[2].humidity.toString().slice(0,5)}
                        &#37;
                       
                    </span>
                </p>
                <p>
                   <strong>Wind Speed: </strong> 
                   <span>
                   {weatherData.consolidated_weather[2].wind_speed.toString().slice(0,5)}
                        mph;
                    </span>
                </p>
                <p>
                   <strong>Wind Direction: </strong> 
                   <span>
                   {weatherData.consolidated_weather[2].wind_direction.toString().slice(0,5)}
                        &#176;
                    </span>
                </p>
                <p>
                   <strong>Air Pressure: </strong> 
                   <span>
                   {weatherData.consolidated_weather[2].air_pressure.toString().slice(0,5)}
                    mbar
                    </span>
                </p>
          </div>
        </div>
        </div>

       
        </div>

        
        </div>
      
      
    
  );
}

export default App;
