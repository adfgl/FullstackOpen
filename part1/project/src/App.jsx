
const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
        {props.name} {props.count}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const content = [
    { name: 'Fundamentals of React', count: 10 },
    { name: 'Using props to pass data', count: 7 },
    { name: 'State of a component', count: 14 }
  ]
  return (
    <div>
      <Header name = {course} />
      {
          content.map((element, index) => (
            <Content 
              key={index} 
              name = {element.name} 
              count = {element.count} 
            />
        ))
      }
      <p>Number of exercises {content.reduce((sum, part) => sum + part.count, 0)}</p>
    </div>
  )
}

export default App