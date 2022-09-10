import Button from './Button'

const Persons = ({filtered, request}) => {
	return (
	  filtered.map((person) =>
		<p key={person.id}>
			{person.name} {person.number}
			<Button text='delete' onClick={() =>
				window.confirm(`Delete ${person.name}`) && request(person.id)
			} />
		</p>
	  )
	)
  }

export default Persons
