import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component { // eslint-disable-line

  render() {
    return (
      <div className="calculator">
        <div className="calc-display">0</div>
        <div className="calc-main">
          <div className="btn">AC</div>
          <div className="btn">+/-</div>
          <div className="btn">%</div>
          <div className="btn">7</div>
          <div className="btn">8</div>
          <div className="btn">9</div>
          <div className="btn">4</div>
          <div className="btn">5</div>
          <div className="btn">6</div>
          <div className="btn">1</div>
          <div className="btn">2</div>
          <div className="btn">3</div>
          <div className="btn calc-zero">0</div>
          <div className="btn btn-point">.</div>
        </div>
        <div className="calc-operators">
          <div className="btn-operators">÷</div>
          <div className="btn-operators">x</div>
          <div className="btn-operators">-</div>
          <div className="btn-operators">+</div>
          <div className="btn-operators">=</div>
        </div>

      </div>

    );
  }
}

// const Calculator = () => (
//   <div className="calculator">
//     <div className="calc-display">0</div>
//     <div className="calc-main">
//       <div className="btn">AC</div>
//       <div className="btn">+/-</div>
//       <div className="btn">%</div>
//       <div className="btn">7</div>
//       <div className="btn">8</div>
//       <div className="btn">9</div>
//       <div className="btn">4</div>
//       <div className="btn">5</div>
//       <div className="btn">6</div>
//       <div className="btn">1</div>
//       <div className="btn">2</div>
//       <div className="btn">3</div>
//       <div className="btn calc-zero">0</div>
//       <div className="btn btn-point">.</div>
//     </div>
//     <div className="calc-operators">
//       <div className="btn-operators">÷</div>
//       <div className="btn-operators">x</div>
//       <div className="btn-operators">-</div>
//       <div className="btn-operators">+</div>
//       <div className="btn-operators">=</div>
//     </div>

//   </div>
// );

export default Calculator;
