// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
   let arr = [];
   while (str.length > 1) {
       arr.push(str.slice(0, 2));
       str = str.slice(2)
   }
   if (str.length === 1) {
       arr.push(str[str.length - 1] + "_");
   }
   
   return arr;
}

console.log(solution('abc'));
console.log(solution('abcdef'));

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']