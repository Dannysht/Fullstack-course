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

export default Course