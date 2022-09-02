const Total = (props) => {
	const { parts } = props;
	const total = parts.reduce((s, p) =>  s += p.exercises, 0);
  
	return (
	  <p><b>Total of {total} exercises</b></p>
	)
  }
  
  const Course = (course) => {
	  return (
		<div>
		  <h1>Web development curriculum</h1>
  
		  {course.courses.map(course =>
			<div key={course.id}>
			  <h2>
				{course.name}
			  </h2>
  
			  {course.parts.map(part =>
				<p key ={part.id}>
				  {part.name} {part.exercises}
				</p>
			  )}
  
			  <Total parts={course.parts} />
			</div>
		  )}
		</div>
	  )
	}

	export default Course
