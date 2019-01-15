import React, { Component } from 'react';
import './App.css';
import { Container, Divider, Button, Header } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

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
    if (correct[counter] === parseInt(e.target.innerHTML)) {
      this.setState({
        correct: this.state.correct + 1
      })
    }
  }
  handleClick = (e) => {
    e.preventDefault()
    this.checkIfCorrect(e)
    counter++
    this.setState({
      question: questions[counter],
      options: options[counter],
      correctAnswer: correct[counter]
    })
  }
  render() {
    return (
      <Container textAlign="center" style={{width: '60vw'}}>
      {
        (counter === questions.length) ?
        <End length={questions.length} correct={this.state.correct}/> :
        <Question question={this.state.question} options={this.state.options} counter={counter} handleClick={this.handleClick}/>
      }
      </Container>
    );
  }
}

export default App;
