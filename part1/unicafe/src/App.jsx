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

  const average = ((good - bad) / all).toFixed(1)
  const positiveShare = ((good / all) * 100).toFixed(1)

  const data = [
    { name: 'good', value: good },
    { name: 'neutral', value: neutral },
    { name: 'bad', value: bad },
    { name: 'all', value: all },
    { name: 'average', value: average },
    { name: 'positive', value: positiveShare, units: '%' }
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
  const scoreGood = 1;
  const scoreNeutral = 0;
  const scoreBad = -1;

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updated = good + 1;
    setGood(updated)
  }

  const handleNeutral = () => {
    const updated = neutral + 1;
    setNeutral(updated);
  };

  const handleBad = () => {
    const updated = bad + 1;
    setBad(updated);
  };

  return (
    <div>
      <Header content={"Give feedback"}/>
      <Button name={"good"} onClick={handleGood}/>
      <Button name={"neutral"} onClick={handleNeutral}/>
      <Button name={"bad"} onClick={handleBad}/>
      
      <Statistics  
        good={good} 
        bad={bad}
        neutral={neutral}/>
    </div>
  )
}

export default App
