/**
 * Given a string, find the length of the longest repeating subsequence, such that the two subsequences don’t have same string character at the same position, i.e. any ith character in the two subsequences shouldn’t have the same index in the original string. 
 */

function lcs(str){
    let i = 0;
    let j = 0;
    return solve(str, i, j);
}

function solve(a, i, j){
    
    if(i >= a.length || j >= a.length && i != j) return 0;

    if(a[i] == a[j] && i != j){
        return 1+ solve(a, i+1, j+1);
    }else{
        return Math.max(solve(a, i+1, j), solve(a, i, j+1));
    }
}

let str = 'AABEBCDD';

console.log('longest repeating subsequence ', lcs(str))