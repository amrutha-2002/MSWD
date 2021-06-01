import React from 'react'
const Header = (props) => {
  return (
    <div>
      <h1>Header</h1>
      <h2>
         course name :</h2> {props.course}
      
    </div>
  )
}
const Content = ({parts}) => {
  const[part1,part2,part3] = parts;
  return (
    <div>
      <h1>Content</h1>
      <p>
      <h2> part1: </h2> {part1.name}<br></br> number of exercises : {part1.exercises}
      </p>
      <p>
      <h2> part2:</h2> {part2.name}<br></br> number of exercises :  {part2.exercises}
      </p>
      <p>
      <h2>part3: </h2>{part3.name} <br></br>number of exercises : {part3.exercises}
      </p>
    </div>
  )
}
const Total = ({parts}) => {
  const[part1,part2,part3] = parts;
  const sum=part1.exercises+part2.exercises+part3.exercises
  return (
    <div>
      <h1>Total</h1>
      <p>Total number of exercises : {sum} </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;