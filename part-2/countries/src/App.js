import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ onChange, value }) => {
  return (
    <>
      <div>
        Find countries <input onChange={onChange} value={value} type='search' />
      </div>
    </>
  );
};

const CountryName = ({ country }) => {
  return (
    <>
      <div>
        <p>{country.name.common}</p>
      </div>
    </>
  );
};

const Languages = ({ languages }) => {
  return(
    <div>
      <h3>Languages</h3>
      <ul>
        {languages.map((language) =>
          <li key={language[0]}>
            {language[1]}</li>
        )}
      </ul>
    </div>
  )
}

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

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setNewSearch] = useState("");

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

 const handleSearch = (event) => {
  console.log(event.target.value)
  setNewSearch(event.target.value);
}

const filtered = search.length > 0
? countries.filter((country) =>
  country.name.common.toLowerCase().includes(search.toLowerCase())
  ) : []

console.log(filtered);

  return (
    <div>
      <Filter onChange={handleSearch} value={search}/>
      <Countries filtered={filtered}/>
    </div>
  )
}

export default App