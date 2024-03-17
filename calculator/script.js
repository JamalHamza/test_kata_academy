// ! Solution 1:
// Using me

function calculator(expression) {
  let result = 0;
  // Split the expression into two numbers and operator
  const numbers = expression.split('+');
  const operator = expression.match(/[+\-*\/]/)[0];

  

  console.log(operator);
  return operator;
}

// ======================================
// Function to change the roman to arabic
function romanNumberToArabicNumber(roman) {
  let arabicNum = 0;
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
  };

  for (let i = 0; i < roman.length; i++) {
    if (i > 0 && romanNumbers[roman[i]] > romanNumbers[roman[i - 1]]) {
      arabicNum += romanNumbers[roman[i]] - 2 * romanNumbers[roman[i - 1]];
    } else {
      arabicNum += romanNumbers[roman[i]];
    }
  }
  return arabicNum;
}

// ==================================
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
  for (let i = 0; i < romanNum.length; i++) {
    while (arabicNumber >= romanNum[i].value) {
      roman += romanNum[i].numeral;
      arabicNumber -= romanNum[i].value;
    }
  }
  return roman;
}

// console.log(romanNumberToArabicNumber('XII'));

// console.log(arabicChangeToRoman('10'));

console.log(calculator('3 + 4'));
