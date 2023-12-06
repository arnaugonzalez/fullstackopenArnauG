import { useState } from 'react'

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const handleNextClick = () => {
    let randInt = getRandomInt(anecdotes.length)
    while (randInt === selected)
      randInt = getRandomInt(anecdotes.length)
    setSelected(randInt)
  }
  
  const handleVoteClick = () => {
    const newVoteCurrent = votes[selected] + 1
    const newVotes = { ...votes, [selected] : newVoteCurrent}
    setVotes(newVotes)
    if(newVoteCurrent > votes[mostVoted])
      setMostVoted(selected)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes.</p>
      <Button onClick={handleNextClick} text='Next anecdote'></Button>
      <Button onClick={handleVoteClick} text='Vote'></Button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
    </>
  )
}

export default App