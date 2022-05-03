import React, { useState } from 'react';
import mayanCalculate from '../logic/mayan_calculate';

const MayanCalculator = () => {
  const [previousState, setState] = useState({ total: '0', mayan: '\u{1d2e0}' });

  const handleEvent = (e) => {
    setState(mayanCalculate(previousState, e.target.id));
  };
  return (
    <div className="mayan-calculator">
      <div className="calc-display-m">
        <p className='calc-mayan'>
          {previousState.mayan}
          {previousState.operation}
          {previousState.nextMayan}
        </p>
      </div>
      <div className="calc-main-m">
        {/*
        Ln 0 - 5
        */}
        <button className="btn" onClick={handleEvent} type="button" id="0">&#x1d2e0;</button>
        <button className="btn" onClick={handleEvent} type="button" id="1">&#x1d2e1;</button>
        <button className="btn" onClick={handleEvent} type="button" id="2">&#x1d2e2;</button>
        <button className="btn" onClick={handleEvent} type="button" id="3">&#x1d2e3;</button>
        <button className="btn" onClick={handleEvent} type="button" id="4">&#x1d2e4;</button>
        {/*
        Ln 6 - 9
        */}
        <button className="btn" onClick={handleEvent} type="button" id="5">&#x1d2e5;</button>
        <button className="btn" onClick={handleEvent} type="button" id="6">&#x1d2e6;</button>
        <button className="btn" onClick={handleEvent} type="button" id="7">&#x1d2e7;</button>
        <button className="btn" onClick={handleEvent} type="button" id="8">&#x1d2e8;</button>
        <button className="btn" onClick={handleEvent} type="button" id="9">&#x1d2e9;</button>
        {/*
        Ln 10 - 14
        */}
        <button className="btn" onClick={handleEvent} type="button" id="a">&#x1d2ea;</button>
        <button className="btn" onClick={handleEvent} type="button" id="b">&#x1d2eb;</button>
        <button className="btn" onClick={handleEvent} type="button" id="c">&#x1d2ec;</button>
        <button className="btn" onClick={handleEvent} type="button" id="d">&#x1d2ed;</button>
        <button className="btn" onClick={handleEvent} type="button" id="e">&#x1d2ee;</button>
        {/*
        Ln 15 - 19
        */}
        <button className="btn" onClick={handleEvent} type="button" id="f">&#x1d2ef;</button>
        <button className="btn" onClick={handleEvent} type="button" id="g">&#x1d2f0;</button>
        <button className="btn" onClick={handleEvent} type="button" id="h">&#x1d2f1;</button>
        <button className="btn" onClick={handleEvent} type="button" id="i">&#x1d2f2;</button>
        <button className="btn" onClick={handleEvent} type="button" id="j">&#x1d2f3;</button>
      </div>
      <div className="calc-operators-m">
        <button className="btn-operators" onClick={handleEvent} type="button" id="÷">÷</button>
        <button className="btn-operators" onClick={handleEvent} type="button" id="x">x</button>
        <button className="btn-operators" onClick={handleEvent} type="button" id="-">-</button>
        <button className="btn-operators" onClick={handleEvent} type="button" id="+">+</button>
      </div>
      <div className='calc-header'>
         <button className="btn" onClick={handleEvent} type="button" id="AC">AC</button>
         <button className="btn-operators" onClick={handleEvent} type="button" id="=">=</button>
      </div>

    </div>

  );
};

export default MayanCalculator;
