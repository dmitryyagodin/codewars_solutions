// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8
/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
*/

function tickets(line) {
  let result = "YES";
  let box = {};
  console.log(line)
  loop:
  for (let i of line) {
    box[i] ? box[i]++ : box[i] = 1;
    switch(i) {
      case 25:
        continue;
      case 50:        
        if (box['25'] > 0) {
          box['25']--;
        } else { 
          result = "NO";
          break loop;
        }
        break;
      case 100:
        if (box['50'] > 0 && box['25'] > 0) {
          box['50']--;
          box['25']--;
        } else if (box['25'] >= 3) {
          box['25'] -= 3;
        } else {
          result = "NO";
          break loop;
        }
        break;
    }
  }
  
  return result
}
// console.log(tickets([25])); // YES
// console.log(tickets([25, 25, 50])); // => YES 
// console.log(tickets([25, 100])); // => NO
// console.log(tickets([25, 25, 50, 50]));  // YES
// console.log(tickets([25, 25, 50, 50, 100])); // => NO
// console.log(tickets([ 25, 50, 25, 50, 100, 25, 25, 50 ])); // YES
// console.log(tickets([25,50,25,100,25,50,25,100,25,25,25,100,25,25,25,100,25,25,50,100])); // YES
console.log(tickets([ 50, 50, 50, 50, 50, 50, 50, 50, 50, 50 ])); // NO