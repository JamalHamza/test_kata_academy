function calculator(string) {
  // ======================================
  // Function to change the roman to arabic
  function romanNumberToArabicNumber(roman) {
    let arabicNum;
    const romanNumbers = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
    };

    console.log(roman);

    for (let i = 0; i < roman.length; i++) {
      if (i > 0 && romanNumbers[roman[i]] > romanNumbers[roman[i - 1]]) {
        arabicNum += romanNumbers[roman[i]] - 2 * romanNumbers[roman[i - 1]];
      } else {
        arabicNum += romanNumbers[roman[i]];
      }
    }

    return arabicNum;
  }
  // =====================================
  // Function to change arabic to Roman
  function arabicChangeToRoman(arabicNumber) {
    const romanNum = [
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' },
    ];

    let roman = '';
    console.log(arabicNumber.length);
    for (let i = 0; i < romanNum.length; i++) {
      while (arabicNumber >= romanNum[i].value) {
        roman += romanNum[i].numeral;
        arabicNumber -= romanNum[i].value;
      }
    }

    return roman;
  }
  // =====================================
  let result = 0;
  // Split the expression to numbers and operator
  const operator = string.match(/[+\-*\/]/)[0];
  const numbers = string.split(operator);
  // Check if the numbers is roman or arabic, if it's roman convert them to arabic for)

  const numberOne = isNaN(numbers[0])
    ? romanNumberToArabicNumber(numbers[0])
    : Number(numbers[0]);
  const numberTwo = isNaN(numbers[1])
    ? romanNumberToArabicNumber(numbers[1])
    : Number(numbers[1]);

  console.log(typeof numberOne, numberTwo);

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
    return arabicChangeToRoman(result).toString();
  } else {
    return result.toString();
  }

  return result;
}
// console.log(calculator('10+1'));
// console.log(calculator('V+I'));
console.log(calculator('I+I'));

// console.log(calculator('1+1'));
