// https://www.codewars.com/kata/525f039017c7cd0e1a000a26

function palindrome_chain_length(n) {
    let len = 0;
    let rev = n => Number(String(n).split("").reverse().join(""))
    while (n !== rev(n)) {
        n += rev(n);
        len ++;
    }
    return len;
}
console.log(palindrome_chain_length(87));