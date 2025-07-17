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

const Display = ({name, count}) => {
  return (
    <p>{name} {count}</p>
  )
} 

const Header = ({content}) => {
  return (
    <h1>{content}</h1>
  )
}

function App() {
  const nameGood = "good"
  const nameNeutral = "neutral"
  const nameBad = "bad"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header content={"Give feedback"}/>
      <Button name={nameGood} onClick={() => setGood(good + 1)}/>
      <Button name={nameNeutral} onClick={() => setNeutral(neutral + 1)}/>
      <Button name={nameBad} onClick={() => setBad(bad + 1)}/>
      
      <Header content={"Statistics"}/>
      <Display name={nameGood} count={good}/>
      <Display name={nameNeutral} count={neutral}/>
      <Display name={nameBad} count={bad}/>
    </div>
  )
}

export default App
