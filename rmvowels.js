// The first solution is cumbersome 
function disemvowel(str) {
    let newStr = "";
    let vowels = ["a", "o", "u", "e", "i"];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            continue;
        } else {
            newStr += str[i];
        }
    }
    
    return newStr;
}


console.log(disemvowel("This website is for losers LOL!"));

// This is a more elegant and more efficient solution that relies on regular expressions

function disemvowel2(str) {
    return str.replace(/[aouie]/gi, "");
}

console.log(disemvowel2("This website is for losers LOL!"));