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