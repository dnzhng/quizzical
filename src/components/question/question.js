import React from 'react';
import Text from './text';
import TrueFalse from './trueOrFalse';

class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type : this.props.type,
      question: this.props.question,
      solution: this.props.solution
    }
  }

  saveQuestion = (question) => {
    this.setState({
      question: question
    })
  }

  saveSolution = (solution) => {
    this.setState({
      solution: solution
    })
  }

  selectQuestionType = (e) => {
    this.setState({
      type : e.target.value
    })
  }

  getValue = () => {
    return this.state;
  }

  renderQuestion = () => {
    let typeMap = {
      trueOrFalse: <TrueFalse index={this.props.index} saveQuestion={this.saveQuestion} saveSolution={this.saveSolution} question={this.state.question} solution={this.state.solution} />,
      text: <Text index={this.props.index} saveQuestion={this.saveQuestion} saveSolution={this.saveSolution} question={this.state.question} solution={this.state.solution} />
    }

    return typeMap[this.state.type];
  }

  render() {

    return (
      <div className="question">
        <h3>Question {this.props.index + 1}</h3>
        <div className="select-group">
          <select value={this.state.type} onChange={this.selectQuestionType}>
            <option>Select Question Type</option>
            <option value="trueOrFalse">True / False</option>
            <option value="text">Text</option>
          </select>
        </div>
        {this.renderQuestion()}
      </div>
    )
  }
}

export default Question;
