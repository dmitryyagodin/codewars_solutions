// Title case
// https://www.codewars.com/kata/5202ef17a402dd033c000009/javascript

function titleCase(title, minors = '') {
    if (!title) {
      return title;
    }
  
    let words = title.toLowerCase().split(' ');
    minors = minors.toLowerCase();
    
    for (let i in words) {
      if (!minors.match(new RegExp(words[i] + '(?!\\w)'))) {
          words[i] = words[i][0].toUpperCase() + words[i].slice(1);
          
      }
    } 
  
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
   
    return words.join(' ');
  }
  
  console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings')
  console.log((titleCase(''), ''));
  console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
  console.log(titleCase('the quick brown fox'));
  console.log(titleCase("First a of in", "an often into")); // // Expected "First A Of In" but got "First a of in".