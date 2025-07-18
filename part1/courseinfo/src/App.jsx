import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = ({course}) => <h1>{course}</h1>
const Part = ({part, exercise}) => <p>{part} {exercise}</p>
const Total = ({parts}) => {
  const total =  parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>Number of exercises {total}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((item, index) => (
        <Part key={index} part={item.part} exercise={item.exercises}/>
      ))}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App
