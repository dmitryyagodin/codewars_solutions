// Highest Rank Number in an Array
// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
// Surely it is possible to solve this more elegantly and with a shorter function. Got stuck in the beginning and decided to go the long way.

function highestRank(arr) {
    let nums = {};
    for (let i of arr) {
        if (nums[i]) {
            nums[i]++;
        } else {
            nums[i] = 1;
        }
    }
    
    let results = [];
    
    for (let i in nums) {
        if (results.length === 0 || results[results.length - 1][1] < nums[i]) {
          results = [[i, nums[i]]];
        } else if (results[results.length - 1][1] === nums[i]) {
          results.push([i, nums[i]]);
        }
    }
   
    return results.length > 1
          ? Number(results.reduce((a, item) => a[1] > item[1] ? a[0] : item[0]))
          : Number(results[0][0]);
  }
  var arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
  
  console.log(highestRank(arr)); // 12