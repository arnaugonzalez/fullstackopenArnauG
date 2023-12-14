
const Header = ({ course }) => <h2>{course}</h2>
  
const Total = ({parts}) => {
    var total = parts.reduce((sum, parts) => {
      sum += parts.exercises
      return sum
    }, 0)
    // var sum = 0
    // for (let i = 0; i < parts.length; i++) {
    //   sum += parts[i].exercises
    // }
    return(
    <p>Number of exercises {total}</p>
    )
}
  
const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>
  
const Content = ({ parts }) => 
    parts.map(part =>
      <Part key={part.id}
        part={part}/>)  

const Course = ({course}) => {
    return(
    <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </>
    )
}
export default Course  