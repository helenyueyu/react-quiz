import React from 'react'
import { Button } from 'semantic-ui-react'

class QuestionBox extends React.Component {
  render() {
    return (
      <div>
        <Button color={(this.props.end === true) ? ((this.props.correct === true) ? 'green' : 'red') : null}>1</Button>
        <Button>2</Button>
      </div>
    )
  }
}

export default QuestionBox
