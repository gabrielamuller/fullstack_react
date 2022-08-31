const Header = ({ title }) => <h1>{title}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Total = (props) => {
  const { parts } = props;
  const total = parts.reduce((s, p) =>  s += p.exercises, 0);

  return (
    <p><b>Total of {total} exercises</b></p>
  )
}

const Content = ({ parts }) => 
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />
    )}
    <Total parts={parts} />
  </>

const Course = ({ course }) => {
  return (
    <div>
      <Header title = {course.name} />
      <Content parts = {course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }

  return <Course course={course} />
}

export default App