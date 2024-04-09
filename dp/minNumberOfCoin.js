/**
 * Given an infinite supply of each denomination of Indian currency { 1, 2, 5, 10, 20, 50, 100, 200, 500, 2000 } and a target value N.
Find the minimum number of coins and/or notes needed to make the change for Rs N. You must return the list containing the value of coins required. 
 */

// recursion -> memoization -> tabulation -> optimize space

function minNumberOfCoin(coin, target) {
   
    //let res = solveRecursive(coin, target);
    let dp = new Array(coin.length).fill(-1);

    let res = solveByMemotiazation(coin, target, dp);
    console.log('dp', dp)
    console.log('res', res);
}

function solveByMemotiazation(arr, target, dp) {
    
    if (target < 0) return Math.min();
    if (target == 0) return 0;
    if(dp[target] != -1) return dp[target];

    let min = Math.min();
    for (let i = 0; i < arr.length; i++) {
        let res  = solveByMemotiazation(arr, target - arr[i], dp);
        if(res != Math.min()){
            min = Math.min(min, res + 1);  
        }
    }
    dp[target] = min;
    return dp[target];
}

function solveRecursive(arr, target) {
    
    if (target < 0) return Math.min();
    if (target == 0) return 0;
    let min = Math.min();
    for (let i = 0; i < arr.length; i++) {
        let res  = solveRecursive(arr, target - arr[i]);
        if(res != Math.min()){
            min = Math.min(min, res + 1);
        }
    }
    return min;
}

let coin = [ 1, 2, 3 ];
let target = 4;

console.log('min number of coin', minNumberOfCoin(coin, target));
