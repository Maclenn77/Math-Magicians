import React, { useState } from 'react';
import calculate from '../logic/calculate';

const MayanCalculator = () => {
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
        <button className="btn" onClick={handleEvent} type="button">&#x1d2e7;</button>
        <button className="btn" onClick={handleEvent} type="button">&#x1d2e8;</button>
        <button className="btn" onClick={handleEvent} type="button">&#x1d2e9;</button>
        <button className="btn" onClick={handleEvent} type="button">&#x1d2e4;</button>
        <button className="btn" onClick={handleEvent} type="button">&#x1d2e5;</button>
        <button className="btn" onClick={handleEvent} type="button">&#x1d2e6;</button>
        <button className="btn" onClick={handleEvent} type="button">&#x1d2e1;</button>
        <button className="btn" onClick={handleEvent} type="button">&#x1d2e2;</button>
        <button className="btn" onClick={handleEvent} type="button">&#x1d2e3;</button>
        <button className="btn calc-zero" onClick={handleEvent} type="button">&#x1d2e0;</button>
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

export default MayanCalculator;
