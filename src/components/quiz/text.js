import React from 'react';

class Text extends React.Component {

  constructor(props) {
    super(props);
  }

  saveSolution = () => {
    this.props.saveSolution(this.refs.solution.value);
  }

  render() {

    return (
      <div className="quiz--text">
        <input ref="solution" onChange={this.saveSolution} value={this.props.solution}></input>
      </div>
    )
  }
}

export default Text;
