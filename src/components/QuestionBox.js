import React from 'react'
import { Button } from 'semantic-ui-react'

class QuestionBox extends React.Component {
  render() {
    console.log(this.props.checkArray)
    return (
      <div>
        {this.props.questions.map((x, index) =>
          <Button key={Math.random()} color={(this.props.end === false) ? null : ((this.props.checkArray[index] === 'Correct') ? 'green' : 'red')}>
            {index + 1}
          </Button>
        )}
      </div>
    )
  }
}

export default QuestionBox
