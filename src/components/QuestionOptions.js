import React from 'react'
import { Button } from 'semantic-ui-react'

const QuestionOptions = (props) => {
  return (
    <div>
    {props.options.map(x => <li key={Math.random()}><Button fluid primary onClick={props.handleClick} style={{marginTop: '1rem'}}>{x}</Button></li>)}
    </div>
  )
}
export default QuestionOptions
