//Exercise 1.8

import { useState } from "react";

const StatisticLine = (props) =>
{
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) =>
{
  if(props.all === 0)
  {
    return (<div><h1>statistics</h1><p>No feedback given</p></div>)
  }
  return(
    <div>
      <h1>statistics</h1>
        <StatisticLine text= "good" value={props.good}/>
        <StatisticLine text= "neutral" value={props.good}/>
        <StatisticLine text= "bad" value={props.good}/>
        <StatisticLine text= "all" value={props.good}/>
        <StatisticLine text= "average" value={props.average}/>
        <StatisticLine text= "positive" value={props.positive}/>
      
    </div>
  )
}

const App = () =>
{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+bad+neutral
  const average = (good-bad)/all
  const positive = (100*good/all)+"%"
  return(
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} all = {all} average ={average} positive = {positive}/>
    </div>
  )
}

export default App