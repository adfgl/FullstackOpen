
const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  const content = props.parts;
  return (
    <div>
      <p>
        {content[0].name} {content[0].exercises}
      </p>

      <p>
        {content[1].name} {content[1].exercises}
      </p>
      
      <p>
        {content[2].name} {content[2].exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  const content = props.parts;
  const count = content.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      Numeber of exercises: {count}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App