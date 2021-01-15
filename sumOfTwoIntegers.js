// Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -
// NOT USING reduce, eval and similar

// The first solution passed all the tests but was too slow
// The second solution was successful, relied on bitwise operators

// Solution 1 (slow)
function add(x, y) {
  const xSign = Math.sign(x);
  const ySign = Math.sign(y);
  const xAbs = Math.abs(x);
  const yAbs = Math.abs(y);
  x = [...Array(xAbs)];
  y = [...Array(yAbs)];;
  
  if (xSign === ySign) {
      return x.concat(y).length * xSign
  } else if (xAbs >= yAbs) {
      return x.slice(y.length).length * xSign;
  } else {
      return y.slice(x.length).length * ySign;
  }
}

var t0 = performance.now();

console.log(add(-2,-5));
console.log(add(5,-2));
console.log(add(-13,13)); 
console.log(add(-27,18));
console.log(add(-90,30));
console.log(add(90, -30));
console.log(add(10030000, -12090)); 

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")


// Solution 2 (faster)

function add(a, b) {
  let bitXor = a ^ b;
  let bitAnd = (a & b) << 1;
  return bitXor & (a & b) << 1 ? add(bitXor, bitAnd) : bitXor ^ bitAnd;
}

t0 = performance.now();

console.log(add(-2,-5));
console.log(add(5,-2));
console.log(add(-13,13)); 
console.log(add(-27,18));
console.log(add(-90,30));
console.log(add(90, -30));
console.log(add(10030000, -12090)); 

t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")