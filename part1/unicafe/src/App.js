//Exercise 1.8

import { useState } from "react";

const Statistics = (props) =>
{
  if(props.all === 0)
  {
    return (<div><h1>statistics</h1><p>No feedback given</p></div>)
  }
  return(
    <div>
      <h1>statistics</h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.all}</p>
        <p>average {(props.good-props.bad)/props.all}</p>
        <p>positive {100*props.good/props.all}%</p>
    </div>
  )
}

const App = () =>
{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+bad+neutral

  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} all = {all}/>
    </div>
  )
}

export default App