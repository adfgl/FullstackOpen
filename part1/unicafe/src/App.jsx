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

const StatisticsLine = ({name, value, units}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td>{units}</td>
    </tr>
  )
} 

const Statistics = ({good, neutral, bad, all, average, positiveShare}) => {
  const statistics = "statistics"
  
  if (all === 0) {
    return (
      <div>
        <Header content={statistics}/>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <Header content={statistics}/>

      <table>
        <tbody>
          <StatisticsLine name={"good"} value={good} />
          <StatisticsLine name={"neutral"} value={neutral} />
          <StatisticsLine name={"bad"} value={bad} />
          <StatisticsLine name={"all"} value={all} />
          <StatisticsLine name={"average"} value={average} />
          <StatisticsLine name={"positive"} value={positiveShare} units={"%"} />
        </tbody>
      </table>
    
    </div>
  )
}

const Header = ({content}) => {
  return (
    <h1>{content}</h1>
  )
}

function App() {
  const scoreGood = 1;
  const scoreNeutral = 0;
  const scoreBad = -1;

  const nameGood = "good"
  const nameNeutral = "neutral"
  const nameBad = "bad"

  const data = {
    "goodCount": 0,
    "neutralCount": 0,
    "badCount": 0,
    "allCount": 0,
    "average": 0.0,
    "positiveShare": 0.0
  }

  //const [state, setState] = useState(data)

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0.0)
  const [positiveShare, setPositiveShare] = useState(0.0)

  const calcAverage = (good, neutral, bad) => {
    const count = good + neutral + bad;
    if (count === 0) return 0;
    return (
      good * scoreGood + 
      neutral * scoreNeutral +
      bad * scoreBad
    ) / count;
  }

  const calcPositiveShare = (good, neutral, bad) => {
    const count = good + neutral + bad;
    if (count === 0) return 0;
    return good / count * 100
  }

  const handleGood = () => {
    const updated = good + 1;
    setGood(updated)
    setAll(updated + neutral + bad);
    setAverage(calcAverage(updated, neutral, bad))
    setPositiveShare(calcPositiveShare(updated, neutral, bad))
  }

  const handleNeutral = () => {
    const updated = neutral + 1;
    setNeutral(updated);
    setAll(good + updated + bad);
    setAverage(calcAverage(good, updated, bad));
    setPositiveShare(calcPositiveShare(good, updated, bad))
  };

  const handleBad = () => {
    const updated = bad + 1;
    setBad(updated);
    setAll(good + neutral + updated);
    setAverage(calcAverage(good, neutral, updated));
    setPositiveShare(calcPositiveShare(good, neutral, updated))
  };

  return (
    <div>
      <Header content={"Give feedback"}/>
      <Button name={nameGood} onClick={handleGood}/>
      <Button name={nameNeutral} onClick={handleNeutral}/>
      <Button name={nameBad} onClick={handleBad}/>
      
      <Statistics  
        good={good} 
        bad={bad}
        neutral={neutral}
        all={all}
        average={average.toFixed(1)}
        positiveShare={positiveShare.toFixed(1)}/>
    </div>
  )
}

export default App
