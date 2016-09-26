import React from 'react';

class Text extends React.Component {

  constructor(props) {
    super(props);
  }

  saveQuestion = () => {
    this.props.saveQuestion(this.refs.question.value);
  }

  saveSolution = (e) => {
    this.props.saveSolution(this.refs.solution.value);
  }

  render() {

    return (
      <div className="question--text">
        <h5>Question</h5>
        <input ref="question" value={this.props.question} onChange={this.saveQuestion}></input>

        <h5>Solution</h5>
        <input ref="solution" value={this.props.solution} onChange={this.saveSolution}></input>
      </div>
    )
  }
}

export default Text;
