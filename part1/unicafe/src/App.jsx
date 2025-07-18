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

const Display = ({name, count, units}) => {
  return (
    <p>{name} {count}{units === undefined ? "" : units}</p>
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

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0.0)

  const calcAverage = (good, neutral, bad) => {
    const count = good + neutral + bad;
    if (count === 0) return 0;
    return (
      good * scoreGood + 
      neutral * scoreNeutral +
      bad * scoreBad
    ) / count;
  }

  const handleGood = () => {
    const updated = good + 1;
    setGood(updated)
    setAverage(calcAverage(updated, neutral, bad))
  }

  const handleNeutral = () => {
    const updated = neutral + 1;
    setNeutral(updated);
    setAverage(calcAverage(good, updated, bad));
  };

  const handleBad = () => {
    const updated = bad + 1;
    setBad(updated);
    setAverage(calcAverage(good, neutral, updated));
  };

  return (
    <div>
      <Header content={"Give feedback"}/>
      <Button name={nameGood} onClick={handleGood}/>
      <Button name={nameNeutral} onClick={handleNeutral}/>
      <Button name={nameBad} onClick={handleBad}/>
      
      <Header content={"Statistics"}/>
      <Display name={nameGood} count={good}/>
      <Display name={nameNeutral} count={neutral}/>
      <Display name={nameBad} count={bad}/>
      <Display name={"average"} count={average}/>
    </div>
  )
}

export default App
