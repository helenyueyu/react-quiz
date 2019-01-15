import React from 'react'
import { Button } from 'semantic-ui-react'

class Start extends React.Component {
  getMinutes = () => Math.floor(Math.random() * 20)
  getGreeting = () => {
    let today = new Date()
    let hour = today.getHours()

    let greeting = (hour < 12) ? 'Good Morning' : (hour < 18) ? 'Good Afternoon' : 'Good Evening'
    return greeting
  }
  render() {
    return (
      <div style={{marginTop: '5rem'}}>
        <h1>{this.getGreeting()}</h1>
        <p style={{fontSize: '1.2rem', width: '40vw', margin: 'auto'}}>This quiz is <b>{this.props.length} questions </b> and will take approximately {this.getMinutes()} minutes to complete.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button onClick={this.props.handleStart}>Begin</Button>
      </div>
    )
  }
}

export default Start
