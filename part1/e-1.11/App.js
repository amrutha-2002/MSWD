import React, { useState } from 'react'
const Statistics = (props) => {
    if (props.good+props.bad+props.neutral === 0) {
      return (
        <div>
          <h1>Statistics</h1>
          No Feedback Given
        </div>
      )
    }
    return (
      <div>
         <h1>statistics</h1>
       <table>
         <tr>
          <td>good</td>
          <td>{props.good}</td>
         </tr>
         <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
         </tr>
         <tr>
          <td>bad</td>
          <td>{props.bad}</td>
         </tr>
         <tr>
          <td>total</td>
          <td>{props.all}</td>
         </tr>
         <tr>
          <td>average</td>
          <td>{props.average}</td>
         </tr>
         <tr>
          <td>positive</td>
          <td>{props.positive}%</td>
         </tr>
      </table>
      </div>
    )
  }
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  
    return (
      <div>
        <h1>give feedback</h1>
        
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
        neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
        bad  
         </button>
        <Statistics good={good} neutral={neutral} bad={bad} all={good+bad+neutral} average={(good-bad)/(good+neutral+bad)} positive={(good/(good+bad+neutral))*100} />
      </div>
    )
  }
export default App