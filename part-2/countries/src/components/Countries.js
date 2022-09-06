import Languages from './Languages'
import CountryName from './CountryName'

const Countries = ({filtered, search}) => {
	return(
	  search === '' ? (
		[]
	  ) : filtered.length > 10 ? (
		<p>Too many searches, specify another filter</p>
	  ) : (
		filtered.map((country) =>
		  filtered.length <= 10 && filtered.length > 1 ? (
			<CountryName key={country.name.common} country={country}/>
		  ) : (
			<div key={country.name.common}>
			  <h2>{country.name.common}</h2>
			  <p>Capital: {country.capital}</p>
			  <p>Area: {country.area}</p>
			  <Languages languages={Object.entries(country.languages)} />
			  <img src={country.flags.png} alt='Country flag' />
			</div>
		  )
		)
	  )
	)
}

export default Countries
