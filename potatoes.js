// Drying potatoes https://www.codewars.com/kata/58ce8725c835848ad6000007
// p0 - initial percent of water 
// w0 - initial total weight
// p1 - percent of water after drying
// output - the total weight after drying

function potatoes(p0, w0, p1) {

    return Math.trunc(w0 * (100 - p0) / (100 - p1));   
}
console.log(potatoes(82, 127, 80)); // 114
console.log(potatoes(93, 129, 91)); // 100
