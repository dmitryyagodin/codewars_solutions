/* Snail sort (4kyu)
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
Example:
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
*/

snail = function(array) {
    let newArr = [];

    while (array.length > 0) {
      try {
        // move array's upper row to newArr
        newArr = newArr.concat(array.shift());
        // move the last items for each of the subarrays from array to newArr
        array.forEach(i => newArr = newArr.concat(i.pop()));
        // reverse the array's bottom row and move it to newArr 
        newArr = newArr.concat(array.pop().reverse());
        // move the first items for each of the subarrays from array to newArr in a reverse order
        newArr = newArr.concat(array.map(item => item.shift()).reverse());
      }
      // break when array is empty the above methods return an error
      catch(err) { 
          break
      }
    }
    
    return newArr;
}

console.log(snail([[]])); // [];
console.log(snail([[1]])); // [1]);
// console.log(snail([[1, 2, 3, 4]
//                  , [5, 6, 7, 8],
//                    [9, 10, 11, 12],
//                    [13, 14, 15, 16]])); //, [1, 2, 3, 6, 9, 8, 7, 4, 5]);

console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));

// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])); 

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);