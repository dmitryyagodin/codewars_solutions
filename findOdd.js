// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
// https://www.codewars.com/kata/54da5a58ea159efa38000836/

function findOdd(A) {
    let nums = {};

    for (let i of A) {
        if (nums[i] === undefined) {
            nums[i] = 1;
        } else {
            nums[i]++;
        }
    }
    for (let [key, value] of Object.entries(nums)) {
        if (value % 2 !== 0) {
            return Number(key);
        }
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));