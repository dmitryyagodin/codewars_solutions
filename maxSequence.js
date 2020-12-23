// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers.
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

let maxSequence = function(arr) {
    let temp = [];
    // get all combinations of contigous elements and store them as arrays to temp 
    for (let i = 0; i <= arr.length; i++) {
      temp.push(arr.slice(i));
      for (let j = i + 1; j <= arr.length; j++) {
        temp.push(arr.slice(i, j));
      }
    }
    // reduce all the temp subarrays to a single value and return the largest
    return Math.max(...temp.map(item => item.reduce((a,b) => a + b, 0)));
  }

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// should be 6: [4, -1, 2, 1]