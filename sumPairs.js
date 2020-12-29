// Several solutions are listed here. But only Solution 5 has passed the large arr tests.
// https://www.codewars.com/kata/54d81488b981293527000c8f

// Solution 5 (passed all the tests)
function sumPairs(data, sum) {
    let memo = {};
    let halfOfSum = false;
    for (let i = 0; i < data.length; i++) {
      if (sum === data[i] + data[i] && halfOfSum === false) {
        halfOfSum = true;
      } else {
        memo[sum - data[i]] = sum - data[i];
      }
     
      if (data[i] === memo[data[i]]) {
        return [sum - data[i], data[i]];
      }
    }
  }

// Solution 4 (passed all the basic tests but got too slow (failed) on large data sets)
function sumPairs(data, sum) {
    let arr = [];
    for (let i in data) {
      if (arr.includes(data[i])) {
        return [sum - data[i], data[i]];
      }
      arr[i] = sum - data[i];
    }
    return
  }

// Solution 3 (passed all the basic tests but got too slow (failed) on large data sets)

function sumPairs() {
    let arr = [];
    
    for (let i = 0; i < arguments[0].length; i++) {
      if (arr.includes(arguments[0][i])) {
        return [arguments[1] - arguments[0][i], arguments[0][i]];
      } else {
        arr.push(arguments[1] - arguments[0][i]);
      }
    }
    return
  }


  // Solution 2 (passed all the basic tests but got too slow (failed) on large data sets)
  function sumPairs() {
    let data = arguments[0];
    let sum = arguments[1];
    let pairs= {};
    
    for (let i = 0; i < data.length; i++) {
      if (data.indexOf(sum - data[i], i + 1) !== -1) {
        pairs[data.indexOf(sum - data[i], i + 1)] = [data[i], data[data.indexOf(sum - data[i], i + 1)]];
      }
     if (Object.keys(pairs).length === 2) {
       return pairs[Math.min(...Object.keys(pairs))]
     }    
    }
    return Object.keys(pairs).length === 0 ? undefined : pairs[Object.keys(pairs)];
  }

// Solution 1 passed all the basic tests but got too slow (failed) on large data sets

function sum_pairs() {
    let data = arguments[0];
    const sum = arguments[1];
    let pairs = {};
    for (let i = 0; i < data.length; i++) {
      for (let j = i + 1; j < data.length; j ++) {
        if (data[i] + data[j] === sum) {
          pairs[j] = [data[i], data[j]];
          }
        }
    }
  
    return  Object.keys(pairs).length === 0 ? undefined : pairs[Math.min(...Object.keys(pairs))];
  }
  
  console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10));

console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // 1, 1
console.log(sumPairs([1, 4, 8, 7, 3, 15, 7], 8)); // 1, 7
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // 3, 7
console.log(sumPairs([20, -13, 40], -7)); // undefined
