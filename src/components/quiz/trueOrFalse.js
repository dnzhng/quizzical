import React from 'react';

class TrueFalse extends React.Component {

  constructor(props) {
    super(props);
  }

  saveSolution = (e) => {
    this.props.saveSolution(e.target.value);
  }
  render() {

    return (
      <div className="quiz--true-false">
        <input type="radio" name="truefalse" onChange={this.saveSolution} checked={this.props.solution === "true"} value="true"/> True<br/>
        <input type="radio" name="truefalse" onChange={this.saveSolution} checked={this.props.solution === "false"} value="false"/> False<br/>
      </div>
    )
  }
}

export default TrueFalse;
