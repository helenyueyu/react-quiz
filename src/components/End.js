import React from 'react'

const End = (props) => {
  return (
    <React.Fragment>
      <h1 style={{marginTop: '3rem'}}>Thanks for playing!</h1>
      <p>You have <b>{props.correct}/{props.length}</b> correct!</p>
      <p>
      This is {props.correct/props.length * 100}%!
      </p>
    </React.Fragment>
  )
}


export default End
