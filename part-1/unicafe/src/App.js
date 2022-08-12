import { useState } from 'react'

const Statistics = (props) => {

  if (props.all===0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="Good" value ={props.good} />
      <StatisticLine text="Neutral" value ={props.neutral} />
      <StatisticLine text="Bad" value ={props.bad} />
      <StatisticLine text="All" value ={props.all} />
      <StatisticLine text="Average" value ={props.average} />
      <StatisticLine text="Positive" value ={props.positive+'%'} />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good-bad)/(good + neutral + bad)
  const positive = good/(good + neutral + bad) * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App