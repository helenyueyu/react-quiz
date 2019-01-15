import React from 'react'

class Start extends React.Component {
  getGreeting = () => {
    let today = new Date()
    let hour = today.getHours()

    let greeting = (hour < 12) ? 'Good Morning' : (hour < 18) ? 'Good Afternoon' : 'Good Evening'
    return greeting
  }
  render() {
    return (
      <div>
        <h1>{this.getGreeting()}</h1>
        <p>This quiz is 10 questions and will take approximately {Math.floor(Math.random()*20)} minutes to complete.</p>
        <button onClick={this.props.handleStart}>Begin</button>
      </div>
    )
  }
}

export default Start
