import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Languages from './Languages'

const Country = ({country}) => {
	const [weather, setWeather] = useState();

	const api_key = process.env.REACT_APP_API_KEY
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`

	useEffect(() => {
		axios
		  .get(url)
		  .then(response => {
			setWeather(response.data)
		  })
	  }, [url])


	if (!weather) {
		return null
	}

	return(
		<div key={country.name.common}>
			<h1>{country.name.common}</h1>
			<p><b>Capital:</b> {country.capital}</p>
			<p><b>Area:</b> {country.area}</p>
			<Languages languages={Object.entries(country.languages)} />
			<img src={country.flags.png} alt='Country flag' />

			<h2>Weather in {country.capital}</h2>
			<p><b>Temperature:</b> {weather.main.temp}° Celsius</p>
			<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather icon'/>
			<p><b>Wind:</b> {weather.wind.speed} m/s</p>
		</div>
	)
}

export default Country
