//  write calculations using functions and get the results like these:
    // seven(times(five())); // must return 35
    // four(plus(nine())); // must return 13
    // eight(minus(three())); // must return 5
    // six(dividedBy(two())); // must return 3
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

let plus = (...args) => "+" + args;
let minus = (...args) => "-" + args;
let times = (...args) => "*" + args;
let dividedBy = (...args) => "/" + args;

let zero = (...args) => args ? Math.floor(eval(0 + args)) : 0;
let one = (...args) => args ? Math.floor(eval(1 + args)) : 1;
let two = (...args) => args ? Math.floor(eval(2 + args)) : 2;
let three = (...args) => args ? Math.floor(eval(3 + args)) : 3;
let four = (...args) => args ? Math.floor(eval(4 + args)) : 4;
let five = (...args) => args ? Math.floor(eval(5 + args)) : 5;
let six = (...args) => args ? Math.floor(eval(6 + args)) : 6;
let seven = (...args) => args ? Math.floor(eval(7 + args)) : 7;
let eight = (...args) => args ? Math.floor(eval(8 + args)) : 8;
let nine = (...args) => args ? Math.floor(eval(9 + args)) : 9;