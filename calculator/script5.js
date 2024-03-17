function calculator(string) {
  // ======================================
  // Function to change the roman to arabic
  function romanNumberToArabicNumber(roman) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
    };

    let arabic = 0;
    for (let i = 0; i < roman.length; i++) {
      if (i > 0 && romanNumerals[roman[i]] > romanNumerals[roman[i - 1]]) {
        arabic += romanNumerals[roman[i]] - 2 * romanNumerals[roman[i - 1]];
      } else {
        arabic += romanNumerals[roman[i]];
      }
    }
    return arabic;
  }
  // =====================================
  // Function to change arabic to Roman
  function arabicChangeToRoman(arabicNumber) {
    const romanNum = [
      { value: 100, numeral: 'C' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' },
    ];

    let roman = '';
    for (let i = 0; i < romanNum.length; i++) {
      while (arabicNumber >= romanNum[i].value) {
        roman += romanNum[i].numeral;
        arabicNumber -= romanNum[i].value;
      }
    }
    return roman;
  }
  // =====================================
  let result;
  // Split the expression to numbers and operator
  const operatorsRegex = /[+\-*\/]/;
  const numbers = string.split(operatorsRegex).map((s) => s.trim());
  const operator = string.match(operatorsRegex)[0];
  // Check if the numbers is roman or arabic, if it's roman convert them to arabic for)
  const numberOne = isNaN(numbers[0])
    ? romanNumberToArabicNumber(numbers[0])
    : Number(numbers[0]);
  const numberTwo = isNaN(numbers[1])
    ? romanNumberToArabicNumber(numbers[1])
    : Number(numbers[1]);

  // ===============================
  // Errors

  if (numbers.length !== 2) {
    throw new Error(
      'Invalid expression: There must be two numbers and one operator'
    );
  }

  // Check for empty or whitespace-only input
  if (string.trim() === '') {
    throw new Error('Invalid input: Empty string');
  }

  // Checking for unsupported operators
  if (!['+', '-', '*', '/'].includes(operator)) {
    throw new Error('Invalid operator');
  }

  // Checking for invalid input
  if (string == '+') {
    throw new Error('Invalid input: Empty string');
  }

  // checking if the numbers are in the range of 1 to 10
  if (numberOne > 10 || numberTwo > 10) {
    throw new Error('Invalid input: Numbers must be in the range of 1 to 10');
  }
  // Checking for division by zero
  if (numberTwo === 0 && operator === '/') {
    throw new Error('Invalid input: Division by zero');
  }
  // Checking for arabic numbers with roman numbers operation
  if (
    (isNaN(numbers[0]) && !isNaN(numbers[1])) ||
    (!isNaN(numbers[0]) && isNaN(numbers[1]))
  ) {
    throw new Error('Invalid input: Number can not with roman');
  }

  // ==============================
  // Operations
  switch (operator) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    case '/':
      result = Math.floor(numberOne / numberTwo); // Integer division
      break;
    default:
      throw new Error('Invalid operator');
  }

  // Convert the result to Roman if it's arabic
  if (isNaN(numbers[0]) || isNaN(numbers[1])) {
    return arabicChangeToRoman(result);
  } else {
    return result.toString();
  }
}

module.exports = calculator; // Не трогайте эту строчку
