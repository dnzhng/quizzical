import React from 'react';
import Question from '../components/question/';
import Quiz from '../components/quiz/';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      count: 0,
      student: false,
      quiz: null
    }
  }

  addQuestion = () => {
    let questions = this.state.questions;
    questions.push(`question_${this.state.count}`);
    this.setState({
      questions : questions,
      count: this.state.count + 1
    })
  }

  renderQuestions = () => {
    return this.state.questions.map((ref, index) => {
      let type, question, solution;
      if (this.state.quiz) {
        type = this.state.quiz[index].type;
        question = this.state.quiz[index].question;
        solution = this.state.quiz[index].solution;
      }
      return <Question ref={ref} key={ref} index={index} type={type} question={question} solution={solution}/>
    })
  }

  saveQuiz = () => {
    let quizData = this.state.questions.map((question) => {
      return this.refs[question].getValue()
    })

    this.setState({
      quiz : quizData
    })
  }

  toggleMode = () => {
    if (!this.state.student) {
      this.saveQuiz()
    }
    this.setState({
      student: !this.state.student
    })
  }

  render() {

    if (this.state.student) {
      return (
        <div className="content">
          <h1>Quizzical</h1>
          <Quiz data={this.state.quiz} />
          <button onClick={this.toggleMode}>Teacher Mode</button>
        </div>
      )
    }
    return (
      <div className="content">
        <h1>Quizzical</h1>
        {this.renderQuestions()}
        <button onClick={this.addQuestion}>Add Question</button>
        <button onClick={this.toggleMode}>Student Mode</button>
      </div>
    )
  }
}

export default Home;
