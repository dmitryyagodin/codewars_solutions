// Error correction #1 - Hamming Code
// Task 1: Encode function
// https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e/javascript

function encode(str) {
    // create an array of ASCII codes for each of the string characters
    let asciiArr = Array.from(str).map(a => a.charCodeAt(0)); 
    
    // convert the items to 8-bit binary
    let binaryArr = asciiArr.map(item => ("000000000" + item.toString(2)).substr(-8));
    let binaryString = binaryArr.join("");
    
    // triple every bit
    let bits = Array.from(binaryString).map(item => item.repeat(3)).join("");

    return bits;
}


// Task 2: Decode function

function decode(bits) {
    let triples = bits.match(/.{3}/g); // Split the input into groups of three characters
    
    // Check if an error occurred: replace each group with the character that occurs most often, e.g. 010 --> 0, 110 --> 1
    let triplesChecked = triples.map(item => /1.?1/.test(item) ? '1' : '0'); // regex pattern of at least two '1's
    
    // Take each group of 8 characters and convert that binary number;
    let strOfBites = triplesChecked.join("");
    let binaryNumsArr = Array.from(strOfBites.match(/.{8}/g));
    
    // Convert the binary values to decimal (ASCII);
    let decimalNumsArr = binaryNumsArr.map(item => parseInt(item, 2));
    
    // Convert the ASCII values to characters and concatenate the result
    let text = decimalNumsArr.map(item => String.fromCharCode(item)).join('');
    return text;
  }


console.log(encode("hey"));
console.log(decode('100111111000111001000010000111111000000111001111000111110110111000010111'));