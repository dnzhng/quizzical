import React from 'react';

class TrueFalse extends React.Component {

  constructor(props) {
    super(props);
  }

  saveQuestion = () => {
    this.props.saveQuestion(this.refs.question.value);
  }

  saveSolution = (e) => {
    this.props.saveSolution(e.target.value);
  }

  render() {

    return (
      <div className="question--true-false">
        <h5>Question</h5>
        <input ref="question" value={this.props.question} onChange={this.saveQuestion}></input>

        <h5>Solution</h5>
        <input type="radio" name={`trueFalse_${this.props.index}`} onChange={this.saveSolution} checked={this.props.solution === "true"} value="true"/> True<br/>
        <input type="radio" name={`trueFalse_${this.props.index}`} onChange={this.saveSolution} checked={this.props.solution === "false"} value="false"/> False<br/>
      </div>
    )
  }
}

export default TrueFalse;
