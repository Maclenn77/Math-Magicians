import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleEvent = (e) => {
    this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="calc-display">
          {total}
          {operation}
          {next}
        </div>
        <div className="calc-main">
          <button className="btn" onClick={this.handleEvent} type="button">AC</button>
          <button className="btn" onClick={this.handleEvent} type="button">+/-</button>
          <button className="btn" onClick={this.handleEvent} type="button">%</button>
          <button className="btn" onClick={this.handleEvent} type="button">7</button>
          <button className="btn" onClick={this.handleEvent} type="button">8</button>
          <button className="btn" onClick={this.handleEvent} type="button">9</button>
          <button className="btn" onClick={this.handleEvent} type="button">4</button>
          <button className="btn" onClick={this.handleEvent} type="button">5</button>
          <button className="btn" onClick={this.handleEvent} type="button">6</button>
          <button className="btn" onClick={this.handleEvent} type="button">1</button>
          <button className="btn" onClick={this.handleEvent} type="button">2</button>
          <button className="btn" onClick={this.handleEvent} type="button">3</button>
          <button className="btn calc-zero" onClick={this.handleEvent} type="button">0</button>
          <button className="btn btn-point" onClick={this.handleEvent} type="button">.</button>
        </div>
        <div className="calc-operators">
          <button className="btn-operators" onClick={this.handleEvent} type="button">÷</button>
          <button className="btn-operators" onClick={this.handleEvent} type="button">x</button>
          <button className="btn-operators" onClick={this.handleEvent} type="button">-</button>
          <button className="btn-operators" onClick={this.handleEvent} type="button">+</button>
          <button className="btn-operators" onClick={this.handleEvent} type="button">=</button>
        </div>

      </div>

    );
  }
}

export default Calculator;
