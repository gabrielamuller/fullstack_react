import Button from './Button'
import Country from './Country'

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
				<p>
					{country.name.common} <Button text='show' onClick={() => setNewSearch(country.name.common)} />
				</p>
			</div>

		  ) : (
			<div key={country.name.common}>
				<Country country={country} />
			</div>
		  )
		)
	  )
	)
}

export default Countries
