import React from 'react'

const QuestionHeader = (props) => {
  return (
    <h3 style={{textAlign: 'left'}}>{props.counter}) {props.question}</h3>
  )
}
export default QuestionHeader
