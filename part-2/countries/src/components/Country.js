import Languages from './Languages'

const Country = ({country}) => {
	return(
		<div key={country.name.common}>
			<h2>{country.name.common}</h2>
			<p>Capital: {country.capital}</p>
			<p>Area: {country.area}</p>
			<Languages languages={Object.entries(country.languages)} />
			<img src={country.flags.png} alt='Country flag' />
		</div>
	)
}

export default Country
