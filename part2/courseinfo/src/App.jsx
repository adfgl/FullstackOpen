const Header = (props) => <h1>{props.course}</h1>

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Course = ({course}) => {
  const name = course.name;
  const parts = course.parts;
  const total = parts.reduce((sum, v) => sum + v.exercises, 0);

  return (
    <div>
      <Header course={name} />
      {
        parts.map(part => 
          <Part key={part.name} part={part}/>
        )
      }
      <b>Number of exercises {total}</b>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

   return (
    <div>
      <h1>Web development curriculum</h1>
      {
        courses.map(item => (
          <Course key={item.id} course={item}/>
        ))
      }
    </div>
   )
}

export default App