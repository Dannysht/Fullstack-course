//Exercise 2.4

const App = () =>  
{ 
  const course = [{
    name: 'Half Stack application development',
    id: 1,
    parts:
    [  
      {
        name : "Fundamentals of React",
        id: 1,
        exercises : 10
      },
      {
        name: "Using props to pass data",
        id: 2,
        exercises: 7
      },
      {
        name: "State of a component",
        id: 3,
        exercises: 14
      },
      {
        name: "Redux",
        id: 4,
        exercises: 11
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
      }]
    }
]


  return (
  <div>
    {course.map(course => <Course key = {course.id} course={course}/>)}
  </div>
  )
}

const Course = (props) =>
{
  return(
    <div>
      <Header course = {props.course}/>
      <Content course = {props.course}/>
      <Footer course = {props.course}/>
    </div>
  )
}

const Header = (props) =>
{
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => 
{
  console.log(props.course);
  return(
  <div>
    {props.course.parts.map(course => <Part key = {course.id} part = {course.name} exercises = {course.exercises}/>)}
  </div>
  )
}

const Part = (props) =>
{
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Footer = (props) =>
{
  let totalExercises = props.course.parts.reduce((first, second) => first + second.exercises, 0)
  return(
    <div>
      <p>
        <strong>
        total of 
        {" "}{totalExercises}{" "}
        exercises
        </strong>
      </p>
    </div>
  )
}

export default App;
