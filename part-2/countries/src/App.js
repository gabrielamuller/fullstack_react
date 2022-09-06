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

const Countries = ({filtered}) => {
  return (
    filtered.map((country) =>
    <div key={country.name.common}>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <img src={country.flags.png} alt='' />
    </div>
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

const filtered = countries.filter((country) =>
  country.name.common.toLowerCase().includes(search.toLowerCase())
);
console.log(filtered);

  return (
    <div>
      <Filter onChange={handleSearch} value={search}/>
      <Countries filtered={filtered}/>
    </div>
  )
}

export default App