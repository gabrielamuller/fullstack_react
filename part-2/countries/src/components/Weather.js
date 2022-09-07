const Weather = ({ weather, capital}) => {
	if (!weather) {
		return null
	}
	return(
	  <div>
			<h2>Weather in {capital}</h2>
			<p><b>Temperature:</b> {weather.main.temp}° Celsius</p>
			<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather icon'/>
			<p><b>Wind:</b> {weather.wind.speed} m/s</p>
	  </div>
	)
}

export default Weather
