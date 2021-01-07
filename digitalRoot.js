//Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// https://www.codewars.com/kata/541c8630095125aba6000c00/javascript

function digital_root(n) {
    return n < 10 ? n : digital_root(n % 10 + digital_root(Math.trunc(n / 10)));
  }
  
  console.log(digital_root(456)); // 
  console.log(digital_root(493193)); // 6