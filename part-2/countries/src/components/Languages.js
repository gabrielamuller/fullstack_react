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

export default Languages
