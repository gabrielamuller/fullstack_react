import { useState } from 'react'

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
    <div>
      name:
      <input value={props.newName}
      onChange={props.handlePersonChange}
      />
    </div>
    <div>
      phone:
      <input value={props.newNumber}
      onChange={props.handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Filter = ({handleSearchChange, search}) => {
  return (
    <div>
        filter shown with <input value={search} onChange={handleSearchChange}/>
    </div>
  )
}

const Persons = ({filtered}) => {
  return (
      filtered.map((person) => {
        return (
          <p key={person.id}>
              {person.name} {person.number}
          </p>
        );
      })
  )
}

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
            persons={persons}
            filtered={filtered}
            handlePersonChange={(persons) => setPersons(persons)}
        />
    </div>
  )
}

export default App