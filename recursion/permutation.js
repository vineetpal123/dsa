/**
 * abc = [abc , acb, bca, bac, cab, cbc]

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */

console.log('permutation', permutation('abc'))

function permutation(str){
    let ans = [];
    let index = 0;
    let curr = '';
    solve(str, index, ans)
    return ans;
}

function solve(str, index, ans){
    if(index >= str.length){
        ans.push(str);
        return 
    }
    
    for(let i = index; i < str.length; i++){
        str = swap(str, index, i);
        solve(str, index +1, ans);
        str = swap(str, i, index);
    }
}

function swap(str, l, r){
    str = str.split('');
    let temp = str[l]
    str[l] = str[r];
    str[r] = temp;
    return str.join('');

}
