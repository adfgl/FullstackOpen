const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = ({course}) => {
  const name = course.name;
  const parts = course.parts;
  console.log(name);
  return (
    <div>
      <Header course={name} />
      {
        parts.map(part => 
          <Part key={part.name} part={part}/>
        )
      }
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

   return <Course course={course} />
}

export default App