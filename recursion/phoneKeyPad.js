/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

console.log('key pad', keyPad(23))

function keyPad(num){
    let ans = [];
    let index = 0;
    num = num.toString();
    let mapping = [0,1,'abc', 'def']
    let curr = '';
    solve(num, index, ans, mapping, curr)
    return ans;
}

function solve(num, index, ans, mapping, curr){
    if(index >= num.length){
        ans.push(curr);
        return 
    }
    for(let i = 0; i < mapping[num[index]].length; i++){
        curr += mapping[num[index]][i];
        solve(num, index+1, ans, mapping, curr);
        curr = curr.slice(0, -1); // back tracking
    }
}
