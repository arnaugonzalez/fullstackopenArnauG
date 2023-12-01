//   cd OneDrive\Desktop\git\part1exs
import { useState } from "react"

const StatisticsLine = (props) => {
  return(
    props.statName === 'Average' ? (
      <tr>
        <td>{props.statName}: </td>
        <td>{props.statValue}%</td>
      </tr>
    ) : (
      <tr>
        <td>{props.statName}: </td>
        <td>{props.statValue}</td>
      </tr>
    )
  )
}

const Statistics = (props) => {
  return(
  <>
  <h1>Statistics</h1>
  { props.total === 0 ? (
    <p>No feedback given</p>
  ) : (
        <>
        <StatisticsLine statName='Good' statValue={props.good}/>
        <StatisticsLine statName='Neutral' statValue={props.neutral}/>
        <StatisticsLine statName='Bad' statValue={props.bad}/>
        <StatisticsLine statName='Total' statValue={props.total}/>
        <StatisticsLine statName='Average' statValue={props.average.toFixed(1)}/>
        <StatisticsLine statName='Positive' statValue={props.positive.toFixed(1)}/>
        </>
    )
  }
  </>
  )
}

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

const App = () => {

  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  // const [total, setTotal] = useState(0)
  // const [avg, setAvg] = useState(0)
  // const [positive, setPositive] = useState(0)
  
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    average: 0,
    positive: 0,
  })
  {/* I got help from ChatGPT for handleClick refactoring, now I can clearly see that
      newFeedback creates a feedback object, getting the spread object, modifying 
      the type we are clicking and the total. I guess avg and positive are outside
      of newFeedBack definition because they have a terciary operator */}
  const handleClick = (type) => {
    const newFeedback = { ...feedback, [type] : feedback[type] + 1, total: feedback.total + 1 }
    
    newFeedback.average = newFeedback.total === 0 ? 0 : newFeedback.total / 3
    newFeedback.positive = newFeedback.total === 0 ? 0 : (newFeedback.good / newFeedback.total) * 100

    setFeedback(newFeedback)
  }

  
  const handleResetClick = () => {
    setGood(0) 
    setNeutral(0)
    setBad(0)
    setTotal(0)
    setAverage(0)
    setPositive(0)
  }

  return (
    <>
      <h1>Give your Feedback</h1>
      <Button onClick={() => handleClick('good')} text='GOOD'/>
      <Button onClick={() => handleClick('neutral')} text='NEUTRAL'/>
      <Button onClick={() => handleClick('bad')} text='BAD'/>
      <Statistics {...feedback}/> 
      {/* Added RESET Button for testing purposes*/}
      <Button onClick={handleResetClick} text='RESET'/>
     
    </>
  )
}

export default App