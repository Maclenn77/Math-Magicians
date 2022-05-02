import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(parseInt(numberOne, 20).toString(10));
  const two = Big(parseInt(numberTwo, 20).toString(10));
  if (operation === '+') {
    return one.plus(two).toString(20);
  }
  if (operation === '-') {
    return one.minus(two).toString(20);
  }
  if (operation === 'x') {
    return one.times(two).toString(20);
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString(20);
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString(20);
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
