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

export default Course