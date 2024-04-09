function lcs(str1, str2){
    let ans = 0;
    let i = 0;
    let j = 0;
    return solve(str1, str2, i, j, ans);
}

function solve(a, b, i, j, ans){
    
    if(i >= a.length || j >= b.length) return 0;

    if(a[i] == b[j]){
        return 1+ solve(a, b, i+1, j+1, ans);
    }else{
        return Math.max(solve(a,b, i+1, j, ans), solve(a,b, i, j+1, ans));
    }
}

let str1 = 'AGGTAB';
let str2 = 'GXTXAYB';

console.log('longest common subsequence ', lcs(str1, str2))