import { useState } from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.content}</li>
  )
}

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState(
    'Arto Hellas'
  ) 

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      content: newName,
      date: new Date().toISOString(),
      id: newName
    }

    const personNames = persons.map(person => person.content)
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App