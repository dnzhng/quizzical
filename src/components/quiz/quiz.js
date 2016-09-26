import React from 'react';
import TrueFalse from './trueOrFalse';
import Text from './text';

class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questionIndex : 0,
      response : [],
      score: null
    }
  }

  saveSolution = (solution) => {
    let response = this.state.response;
    response[this.state.questionIndex] = solution;

    this.setState({
      response: response
    })
  }

  renderQuestion = () => {
    let question = this.props.data[this.state.questionIndex];
    let solution = this.state.response[this.state.questionIndex];
    let questionTypes = {
      trueOrFalse : <TrueFalse saveSolution={this.saveSolution} solution={solution} />,
      text : <Text saveSolution={this.saveSolution} solution={solution} />
    }
    if (this.state.score) {
      return this.renderScore();
    }
    return (
      <div className="question">
        <h3>Question {this.state.questionIndex + 1}</h3>
        <h4>{question.question}</h4>
        {questionTypes[question.type]}
      </div>
    )
  }

  renderScore = () => {
    return (
      <div>
        <h3>You got {this.state.score} / {this.props.data.length} questions correct!</h3>
      </div>
    )
  }

  previous = () => {
    this.setState({
      questionIndex : this.state.questionIndex - 1
    })
  }

  renderPrevious = () => {
    if (this.state.questionIndex > 0 && !this.state.score) {
      return (
        <button onClick={this.previous}>Previous</button>
      )
    } else {
      return null;
    }
  }

  next = () => {
    this.setState({
      questionIndex : this.state.questionIndex + 1
    })
  }

  renderNext = () => {
    if (this.state.questionIndex < this.props.data.length - 1) {
      return (
        <button onClick={this.next}>Next</button>
      )
    } else if (this.state.score){
      return null;
    } else {
      return (
        <button onClick={this.submit}>Submit</button>
      )
    }
  }

  submit = () => {
    let responses = this.state.response;
    let score = 0;
    responses.forEach((response, index) => {
      if (response == this.props.data[index].solution) {
        score++
      }
    })

    this.setState({
      score : score
    })
  }

  render() {

    return (
      <div className="quiz">
        {this.renderQuestion()}
        {this.renderPrevious()}
        {this.renderNext()}
      </div>
    )
  }
}

export default Quiz;
