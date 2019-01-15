import React from 'react'
import { Divider, Button, Header } from 'semantic-ui-react'

const Question = (props) => {
  return (
    <React.Fragment>
    <Header as="h1" style={{marginTop: '3rem'}}>
      React Quiz
    </Header>

    <Divider />

    <h3>{props.counter + 1}) {props.question}</h3>
    {props.options.map(x => <li key={Math.random()}><Button fluid primary onClick={props.handleClick} style={{marginTop: '1rem'}}>{x}</Button></li>)}
    </React.Fragment>
  )
}

export default Question
