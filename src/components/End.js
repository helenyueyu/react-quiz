import React from 'react'
import { Divider, Button } from 'semantic-ui-react'

import QuestionBox from './QuestionBox'

const End = (props) => {
  return (
    <React.Fragment>
      <h1>Thanks for playing!</h1>

      <QuestionBox questions = {props.questions} checkArray = {props.checkArray} end = {true}/>

      <Divider />
      <br/>
      <br/>
      <p>You have <b>{props.correct}/{props.length}</b> correct!</p>

      <p>
      This is {props.correct/props.length * 100}%!
      </p>
      <Button onClick={props.handleRestart}>Restart</Button>
    </React.Fragment>
  )
}


export default End
