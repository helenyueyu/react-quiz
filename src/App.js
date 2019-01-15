import React, { Component } from 'react';
import './App.css';
import { Container, Divider, Button } from 'semantic-ui-react'

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
      <Container textAlign="center">
      <Divider />
      {
        (counter === questions.length) ?
        <h1>Thanks for playing! You have {this.state.correct}/{questions.length} correct!</h1> :
        <React.Fragment><h2>React Quiz</h2>
        <h3>{counter + 1}) {this.state.question}</h3>
        {this.state.options.map(x => <li key={Math.random()}><Button primary onClick={this.handleClick}>{x}</Button></li>)}</React.Fragment>
      }
      </Container>
    );
  }
}

export default App;
