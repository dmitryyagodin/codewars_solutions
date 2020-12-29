// Sum - Square Even, Root Odd
// the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.
// The list will never be empty and will only contain values that are greater than or equal to zero.

const sumSquareEvenRootOdd = ns => {
    let newNs = ns.map(item => item % 2 === 0 ? item * item : Math.pow(item, 1/2));
    let sum = newNs.reduce((a, b) => a + b, 0);
    let sumTwoDecimals = sum.toFixed(2);
    return Number(sumTwoDecimals);
  };


console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0])); // 91.61
console.log(sumSquareEvenRootOdd([1,14,9,8,17,21])); // 272.71