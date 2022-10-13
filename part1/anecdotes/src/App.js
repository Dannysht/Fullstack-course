//Exercise 1.14

import { useState } from "react";

const App = () =>
{
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])
  
  const [selected, setSelected] = useState(0)
  const storeNewVote = () => 
  {
    const copy = [...points]
    copy[selected]+=1
    setPoints(copy)
  }

  const AnecdoteWithMostVotes = () => 
  {
    let currentHighest = 0
    let index = 0
    for(let i = 0; i < points.length; ++i)
    {
      if(points[i] > currentHighest)
      {
        currentHighest = points[i]
        index = i
      }
    }
    return (
      <div>
        <p>{anecdotes[index]}</p>
        <p>has {currentHighest} votes</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => setSelected(Math.floor(Math.random()*7))}>next anecdote</button>
      <button onClick={storeNewVote}>vote</button>
      <h1>Anecdote with the most votes</h1>
      <AnecdoteWithMostVotes/>
    </div>
  )

}

export default App;
