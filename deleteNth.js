// Delete occurrences of an element if it occurs more than n times
// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n){
    if (!n) {
        return
    }

    let nums = {}
    let res = [];
    for (let i of arr) {
        if (!nums[i]) {
            nums[i] = 1;
            res.push(i);
        } else {
            nums[i]++;
            if (nums[i] <= n) {
                res.push(i);
            }

        }
    }
    return res
}

console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
console.log(deleteNth([1, 2, 3, 3]));