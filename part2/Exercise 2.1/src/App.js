//Exercise 2.2

const App = () =>  
{ 
  const course = {
    name: 'Half Stack application development',
    parts:
    [  
      {
        name : "Fundamentals of React",
        exercises : 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      },
      {
        name: "Redux",
        exercises: 11
      }
    ]
  }


  return (
  <div>
    <Course course = {course}/>
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
  return(
    <div>
      <Part part = {props.course.parts[0].name} exercises = {props.course.parts[0].exercises}/>
      <Part part = {props.course.parts[1].name} exercises = {props.course.parts[1].exercises}/>
      <Part part = {props.course.parts[2].name} exercises = {props.course.parts[2].exercises}/>
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
  let totalExercises = 0
  props.course.parts.map(parts => {totalExercises +=parts.exercises;return true})
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
