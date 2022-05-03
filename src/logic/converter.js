export const convertToMayan = (number) => {
  const result = parseInt(number, 10).toString(20);
  console.log(result);
  const mayanResult = [];
  for (let i = 0; i < result.length; i++) {
    mayanResult.push(vigesimalMayanNumeral.get(result[i]));
  }
  return mayanResult;
};

export const convertToUnicode = (value) => {
  const digit = vigesimalMayanNumeral.get(value);
  return digit;
};

const vigesimalMayanNumeral = new Map([
  ['0', '\u{1d2e0}'],
  ['1', '\u{1d2e1}'],
  ['2', '\u{1d2e2}'],
  ['3', '\u{1d2e3}'],
  ['4', '\u{1d2e4}'],
  ['5', '\u{1d2e5}'],
  ['6', '\u{1d2e6}'],
  ['7', '\u{1d2e7}'],
  ['8', '\u{1d2e8}'],
  ['9', '\u{1d2e9}'],
  ['a', '\u{1d2ea}'],
  ['b', '\u{1d2eb}'],
  ['c', '\u{1d2ec}'],
  ['d', '\u{1d2ed}'],
  ['e', '\u{1d2ee}'],
  ['f', '\u{1d2ef}'],
  ['g', '\u{1d2f0}'],
  ['h', '\u{1d2f1}'],
  ['i', '\u{1d2f2}'],
  ['j', '\u{1d2f3}'],
]);

const convertToVigesimal = (number) => {
  const vigesimalNumber = parseInt(number, 20).toString;
  console.log(`Converted ${{ vigesimalNumber }}`);
  return vigesimalNumber;
};
