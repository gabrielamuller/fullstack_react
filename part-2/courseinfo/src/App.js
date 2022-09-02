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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App