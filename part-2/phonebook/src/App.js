import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState(
    'Arto Hellas'
  )
  const [newNumber, setNewNumber] = useState(
    '0101010'
  )
  const [search, setNewSearch] = useState("");

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName
    }

    const personNames = persons.map(person => person.name)

    if (personNames.includes(newName.trim())) {
      alert(`${newName} is already added to phonebook`)
    } else {

      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value);
  }

  const deletePerson = id => {
    personService.deleteData(id)
      .then(setPersons(persons.filter(
        person => person.id !== id
        )))
  }

  const filtered = !search
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleSearchChange={handleSearchChange}/>

      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        onSubmit={addPerson}
      />

      <h2>Numbers</h2>
        <Persons
            filtered={filtered} request={deletePerson}
        />
    </div>
  )
}

export default App