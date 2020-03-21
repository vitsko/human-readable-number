module.exports = function toReadable(number) {
  if (!number) {
    return 'zero';
  }

  const UNITS = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
    10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
    17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
  }

  const DOZENS = {
    1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty',
    6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
  }

  let total = [];
  let units = number % 10;
  let dozens = Math.floor(number / 10) % 10;
  let hundreds = Math.floor(number / 100) % 10;

  if (hundreds) {
    total.push(UNITS[hundreds].concat(' hundred'));
  }

  if (number % 100 < 20) {
    if (number % 100) {
      total.push(UNITS[number % 100]);
    }
  } else {
    if (dozens) {
      total.push(DOZENS[dozens]);
    }

    if (units) {
      total.push(UNITS[units]);
    }
  }

  return total.join(' ');
}