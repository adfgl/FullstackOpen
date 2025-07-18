import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Header({content}) {
  return (
    <h1>{content}</h1>
  )
}

function Button({name, onClick}) {
  return (
    <button onClick = {onClick}>
      {name}
    </button>
  )
}

function Anecdote({content, votes}) {
  return (
    <div>
      <p>{content}</p>
      <p>has {votes} votes</p>
    </div>

  )
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getMaxIndex(array) {
  if (array.length === 0) return -1;

  let maxIndex = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[maxIndex] < array[i]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const setNext = () => {
    const next = getRandomInt(0, anecdotes.length)
    setSelected(next)
  }

  const upvote = () => {
    const copy = [...votes]
    copy[selected] += 1

    if (selected !== maxIndex) {
      const max = getMaxIndex(copy);
      setMaxIndex(max)
    }
    setVotes(copy)
  }

  return (
    <div>
      <Header content="Anecdote of the day" />
      <Anecdote content={anecdotes[selected]} votes={votes[selected]}/>

      <Button name="vote" onClick={upvote} />
      <Button name="next anecdote" onClick={setNext} />

      <Header content="Anecdote with most votes" />
      <Anecdote content={anecdotes[maxIndex]} votes={votes[maxIndex]}/>
    </div>
  )
}

export default App
