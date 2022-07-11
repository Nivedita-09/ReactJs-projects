import constants from "./constants"

export default function WeatherData({weatherData}){
    return(
        <div className="weather-container">
            <div className="main">
                <img src={`${constants.IMG_URL}${weatherData.consolidated_weather[0].weather_state_abbr}.svg`} />
                <p>
                    <strong>It's <span>{weatherData.consolidated_weather[0].the_temp} &#8451; </span>
                    predicted <span>{weatherData.consolidated_weather[0].weather_state_name}</span></strong>
                </p>
            </div>
            <div className="header">
                <p>
                <span>
                    <strong>Place:</strong> {weatherData.title}, {weatherData.parent.title}
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
                       {weatherData.consolidated_weather[0].max_temp.toString().slice(0,5)}
                       &#8451;/{weatherData.consolidated_weather[0].min_temp.toString().slice(0,5)} 
                       &#8451;
                    </span>
                </p>
                <p>
                   <strong>Humidity: </strong> 
                   <span>
                   {weatherData.consolidated_weather[0].humidity.toString().slice(0,5)}
                        &#37;
                       
                    </span>
                </p>
                <p>
                   <strong>Wind Speed: </strong> 
                   <span>
                   {weatherData.consolidated_weather[0].wind_speed.toString().slice(0,5)}
                        mph;
                    </span>
                </p>
                <p>
                   <strong>Wind Direction: </strong> 
                   <span>
                   {weatherData.consolidated_weather[0].wind_direction.toString().slice(0,5)}
                        &#176;
                    </span>
                </p>
                <p>
                   <strong>Air Pressure: </strong> 
                   <span>
                   {weatherData.consolidated_weather[0].air_pressure.toString().slice(0,5)}
                    mbar
                    </span>
                </p>
            </div>
        
        </div>
        
          

    )
}