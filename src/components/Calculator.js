import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
      this.handleEvent = this.handleEvent.bind(this);
      this.state = {
      total: '0',
      next: null,
      operation: null
    };
  }
  
  handleEvent = (e) => {
      this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  render() {
    const { total, next, operation} = this.state;
    return (
      <div className="calculator">
        <div className="calc-display">{total}{operation}{next}</div>
        <div className="calc-main">
          <button className="btn" onClick={this.handleEvent}>AC</button>
          <button className="btn" onClick={this.handleEvent}>+/-</button>
          <button className="btn" onClick={this.handleEvent}>%</button>
          <button className="btn" onClick={this.handleEvent}>7</button>
          <button className="btn" onClick={this.handleEvent}>8</button>
          <button className="btn" onClick={this.handleEvent}>9</button>
          <button className="btn" onClick={this.handleEvent}>4</button>
          <button className="btn" onClick={this.handleEvent}>5</button>
          <button className="btn" onClick={this.handleEvent}>6</button>
          <button className="btn" onClick={this.handleEvent}>1</button>
          <button className="btn" onClick={this.handleEvent}>2</button>
          <button className="btn" onClick={this.handleEvent}>3</button>
          <button className="btn calc-zero" onClick={this.handleEvent}>0</button>
          <button className="btn btn-point" onClick={this.handleEvent}>.</button>
        </div>
        <div className="calc-operators">
          <button className="btn-operators" onClick={this.handleEvent}>÷</button>
          <button className="btn-operators" onClick={this.handleEvent}>x</button>
          <button className="btn-operators" onClick={this.handleEvent}>-</button>
          <button className="btn-operators" onClick={this.handleEvent}>+</button>
          <button className="btn-operators" onClick={this.handleEvent}>=</button>
        </div>

      </div>

    );
  }
}

export default Calculator;
