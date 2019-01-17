import React from 'react'
import { Button } from 'semantic-ui-react'

const QuestionOptions = (props) => {
  return (
    <div>
    {props.options.map(x => <li key={Math.random()}>
    <Button fluid onClick={props.handleClick} style={{marginTop: '1rem'}} color={(props.darkMode === false) ? 'white' : 'grey'}>
      {x}
    </Button></li>)}
    </div>
  )
}
export default QuestionOptions
