// Unique string characters
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript

function solve(a, b) {
    let str = "";
    for (let i = 0; i < a.length; i++) {
        if (b.includes(a[i])) {
            continue;
        } else {
            str += a[i];
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i])) {
            continue;
        } else {
            str += b[i];
        }
    }
    return str;
}

console.log(solve("xyab","xzca"));//,"ybzc");
console.log(solve("xyabb","xzca")); //,"ybbzc");
console.log(solve("abcd","xyz")); //,"abcdxyz");
console.log(solve("xxx","xzca")); //,"zca");