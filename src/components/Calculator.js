import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [previousState, setState] = useState({ total: '0' });

  const handleEvent = (e) => {
    setState(calculate(previousState, e.target.innerText));
  };

  return (
    <div className="calculator">
      <div className="calc-display">
        {previousState.total}
        {previousState.operation}
        {previousState.next}
      </div>
      <div className="calc-main">
        <button className="btn" onClick={handleEvent} type="button">AC</button>
        <button className="btn" onClick={handleEvent} type="button">+/-</button>
        <button className="btn" onClick={handleEvent} type="button">%</button>
        <button className="btn" onClick={handleEvent} type="button">7</button>
        <button className="btn" onClick={handleEvent} type="button">8</button>
        <button className="btn" onClick={handleEvent} type="button">9</button>
        <button className="btn" onClick={handleEvent} type="button">4</button>
        <button className="btn" onClick={handleEvent} type="button">5</button>
        <button className="btn" onClick={handleEvent} type="button">6</button>
        <button className="btn" onClick={handleEvent} type="button">1</button>
        <button className="btn" onClick={handleEvent} type="button">2</button>
        <button className="btn" onClick={handleEvent} type="button">3</button>
        <button className="btn calc-zero" onClick={handleEvent} type="button">0</button>
        <button className="btn btn-point" onClick={handleEvent} type="button">.</button>
      </div>
      <div className="calc-operators">
        <button className="btn-operators" onClick={handleEvent} type="button">÷</button>
        <button className="btn-operators" onClick={handleEvent} type="button">x</button>
        <button className="btn-operators" onClick={handleEvent} type="button">-</button>
        <button className="btn-operators" onClick={handleEvent} type="button">+</button>
        <button className="btn-operators" onClick={handleEvent} type="button">=</button>
      </div>

    </div>

  );
};

export default Calculator;
