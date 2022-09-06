import Languages from './Languages'
import CountryName from './CountryName'
import Button from './Button'


const Countries = ({filtered, search, setNewSearch}) => {
	return(
	  search === '' ? (
		[]
	  ) : filtered.length > 10 ? (
		<p>Too many searches, specify another filter</p>
	  ) : (
		filtered.map((country) =>
		  filtered.length <= 10 && filtered.length > 1 ? (
			<div key={country.name.common}>
				<CountryName country={country}/>
				<Button text='show' onClick={() => setNewSearch(country.name.common)} />
			</div>

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
