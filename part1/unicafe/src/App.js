//Exercise 1.11

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
      <table>
        <thead>
        </thead>
        <tbody>
        <tr><td>good</td><td>{props.good}</td></tr>
        <tr><td>neutral</td><td>{props.neutral}</td></tr>
        <tr><td>bad</td><td>{props.bad}</td></tr>
        <tr><td>all</td><td>{props.all}</td></tr>
        <tr><td>average</td><td>{props.average}</td></tr>
        <tr><td>positive</td><td>{props.positive}</td></tr>
        </tbody>
      </table>
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