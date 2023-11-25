
const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Content = (props) => {
  return(
    <>
    <Part name={"Fundamentals of React"} exs={10}/>
    <Part name="Using props to pass data" exs={7}/>
    <Part name="State of a component" exs={14}/>
    </>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.name} has {props.exs} exercices</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.ex[0]
                    + props.ex[1] + props.ex[2]}</p>
    </div>
  )
}
const App = () => {
  return (
    <>
      <Header course="Half Stack application development"/>
      <Content/>
      <Total ex={[10,7,14]}/>
    </>
  )
}

export default App