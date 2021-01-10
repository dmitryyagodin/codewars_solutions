// Moving Zeros To The End
// takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// https://www.codewars.com/kata/52597aa56021e91c93000cb0


var moveZeros = function (arr) {
    return arr.filter(item => item !== 0)
           .concat(arr.filter(item => item === 0));
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));