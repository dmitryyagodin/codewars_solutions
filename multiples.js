//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(number){
  if (number < 0) {
      return 0;
  }
  let n = 0;
  for (let i = number - 1; i > 2; i--) {
      if (i % 3 === 0 || i % 5 === 0) {
          n += i;
      }
  }
  
  return n
}

console.log(solution(10)); // 23