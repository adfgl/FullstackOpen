import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Button = ({name, onClick}) => {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}

function Header({content}) {
  return (
    <h1>{content}</h1>
  )
}

const StatisticsLine = ({name, value, units}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td>{units}</td>
    </tr>
  )
} 

const Statistics = ({good, neutral, bad}) => {
  const statistics = "statistics"
  
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <div>
        <Header content={statistics}/>
        <p>No feedback given</p>
      </div>
    )
  }

  const goodScore = +1;
  const badScore = -1;
  const neutralScore = 0;

  const average = ((good * goodScore + bad * badScore + neutral * neutralScore) / all).toFixed(1)
  const positiveShare = ((good / all) * 100).toFixed(1)

  const data = [
    { name: "good", value: good },
    { name: "neutral", value: neutral },
    { name: "bad", value: bad },
    { name: "all", value: all },
    { name: "average", value: average },
    { name: "positive", value: positiveShare, units: '%' }
  ]
   return (
    <div>
      <Header content={statistics}/>
      <table>
        <tbody>
          {data.map((line) => (
            <StatisticsLine
              key={line.name}
              name={line.name}
              value={line.value}
              units={line.units}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header content={"Give feedback"}/>
      <Button name={"good"} onClick={() => setGood(good + 1)}/>
      <Button name={"neutral"} onClick={() => setNeutral(neutral + 1)}/>
      <Button name={"bad"} onClick={() => setBad(bad + 1)}/>
      
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App
