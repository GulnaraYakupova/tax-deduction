import {v4} from 'uuid';

const MAX_PAYMENT = 260000;
const TAX_PROPORTION = 0.13;
const YEAR_MONTHS = 12;

export const addPreEndToNums = (number) => {
  const pretexts = ['в', 'во']
  const ends = ['ый','ый','ой','ий','ый','ый','ой','ой','ой', 'ый'];
  let pretext = pretexts[0];

  if (number === 2) {
    pretext = pretexts[1];
  }

  if (((number % 100) >= 9) && ((number%100) <= 19)) {
    return `${pretext} ${number}-ый`;
  } else {
    return `${pretext} ${number}-${ends[number % 10]}`;
  }
}

export const calculateTaxDeduction = paymentValue => {
  return paymentValue * YEAR_MONTHS * TAX_PROPORTION;
};

export const getAccountedArray = unit => {
  const result = [];
  let total = 0;
  let iteration = 0;

  while (total + unit < MAX_PAYMENT) {
    total += unit;
    iteration++;
    result.push({
      id: v4(),
      year: iteration,
      amount: unit,
      isCheck: true,
    });
  }

  result.push({
    id: v4(),
    year: iteration + 1,
    amount: MAX_PAYMENT - total,
    isCheck: true,
  });

  return result;
};