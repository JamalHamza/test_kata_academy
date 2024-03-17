// ! Solution 1:
// Using me

function calculator(expression) {
  let result = 0;
  try {
    result = eval(expression);
  } catch (error) {
    return `Error: ${error.message}`;
  }

  return result;
}

// Function to change the roman to arabic
function romanExchangeToArabic(roman) {
  let arabicNo = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
  };

  for (let i = 0; i < roman.length; i++) {
    if (i > 0 && romanNumerals[roman[i]] > romanNumerals[roman[i - 1]]) {
      arabicNo += romanNumerals[roman[i]] - 2 * romanNumerals[roman[i - 1]];
    } else {
      arabicNo += romanNumerals[roman[i]];
    }
  }
  return arabicNo;
}

console.log(calculator(' 3b + 3'));
