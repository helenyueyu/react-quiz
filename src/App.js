import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

import Start from './components/Start'
import Question from './components/Question'
import End from './components/End'

const questions = ['What is 2 + 2?', 'What is 1 + 1?']
const options = [[4, 5, 8, 10], [2, 3, 4, 5]]
const correct = [4, 2]

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
    if (correct[counter-1] === parseInt(e.target.innerHTML)) {
      this.setState({
        correct: this.state.correct + 1
      })
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
    return (
      <Container textAlign="center" style={{width: '60vw'}}>
      {
        (counter === 0) ? <Start length={questions.length} counter={counter} handleStart={this.handleStart}/> :
        (counter - 1 === questions.length) ?
        <End length={questions.length} correct={this.state.correct} handleRestart={this.handleRestart}/> :
        <Question question={this.state.question} options={this.state.options} counter={counter} handleClick={this.handleClick}/>
      }
      </Container>
    );
  }
}

export default App;
