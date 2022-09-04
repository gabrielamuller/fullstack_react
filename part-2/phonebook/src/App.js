import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState(
    'Arto Hellas'
  )
  const [newNumber, setNewNumber] = useState(
    '0101010'
  )
  const [search, setNewSearch] = useState("");


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
      setPersons(persons.concat(personObject))
      setNewName('')
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
};

const filtered = !search
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        filter shown with<input value={search} onChange={handleSearchChange}/>
      </form>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          phone:
          <input value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {filtered.map((person) => {
          return (
            <p key={person.id}>
                {person.name} {person.number}
            </p>
          );
        })}
    </div>
  )
}

export default App