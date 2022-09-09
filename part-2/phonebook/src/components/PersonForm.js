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

export default PersonForm
