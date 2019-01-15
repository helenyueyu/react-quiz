import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

import Start from './components/Start'
import Question from './components/Question'
import End from './components/End'

const questions =
[
  'What is the capital of California?',
  'What is the capital of New York?',
  'What is the capital of Nevada',
  'What is the capital of China?'
]
const options =
[
  ['Sacramento', 'Boise', 'New York', 'Nova Scotia'],
  ['Albany', 'Manhattan', 'The Bronx', 'Tribeca'],
  ['Carson City', 'Reno', 'Las Vegas', 'Portland'],
  ['Beijing', 'Shanghai', 'Hong Kong', 'Taiwan']
]
const correct =
[
  'Sacramento', 'Albany', 'Carson City', 'Beijing'
]
let checkArray = []

// Let's us know current question
let counter = 0;

class App extends Component {
  state = {
    question: questions[counter],
    options: options[counter],
    correctAnswer: correct[counter],
    correct: 0
  }
  checkIfCorrect = (e) => {
    if (correct[counter-1] === e.target.innerHTML) {
      this.setState({
        correct: this.state.correct + 1
      })
      checkArray.push('Correct')
    } else {
      checkArray.push('Incorrect')
    }
  }
  handleRestart = (e) => {
    e.preventDefault()
    counter = 0
    this.setState({
      correct: 0
    })
    this.setState({
      question: questions[counter-1],
      options: options[counter-1],
      correctAnswer: correct[counter-1]
    })
    checkArray = []
  }
  handleStart = (e) => {
    e.preventDefault()
    counter ++
    console.log(counter)
    this.setState({
      question: questions[counter-1],
      options: options[counter-1],
      correctAnswer: correct[counter-1]
    })
  }
  handleClick = (e) => {
    e.preventDefault()
    this.checkIfCorrect(e)
    counter++
    this.setState({
      question: questions[counter-1],
      options: options[counter-1],
      correctAnswer: correct[counter-1]
    })
  }
  render() {
    console.log(checkArray)
    return (
      <Container textAlign="center" style={{width: '60vw'}}>
      {
        (counter === 0) ? <Start length={questions.length} counter={counter} handleStart={this.handleStart}/> :
        (counter - 1 === questions.length) ?
        <End length={questions.length} correct={this.state.correct} handleRestart={this.handleRestart} questions={questions} checkArray={checkArray}/> :
        <Question question={this.state.question} options={this.state.options} counter={counter} handleClick={this.handleClick} questions={questions} checkArray={checkArray}/>
      }
      </Container>
    );
  }
}

export default App;
