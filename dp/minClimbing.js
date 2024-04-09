/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
 */

function minClimbing(cost, n) {
   let dp = new Array(n).fill(-1);
   let res= solve3(cost, n, dp);
   console.log('dp', dp);
   return res;
}

function solve3(cost, n , dp){
    dp[0] =0;
    dp[1] = Math.min(cost[0], cost[1]);

    for(let i = 2; i< n; i++){
        dp[i] = Math.min(dp[i-1] + cost[i-1] , dp[i-2] + cost[i-2]);
    }

    return Math.min(dp[n-1], dp[n-2]);
}

function solve(arr, n, dp){
    if (n <= 1) return dp[n] =0;
    if (n == 2) return dp[n] = Math.min(arr[0], arr[1]);
    if(dp[n-1] != -1) return dp[n];
    
    dp[n] = Math.min(solve(arr, n-1, dp) + arr[n-1] , solve(arr, n-2, dp) + arr[n-2]);
    return dp[n];
}

function solve1(arr, n, dp){
    if (n <= 1) return 0;
    if (n == 2) return Math.min(arr[0], arr[1]);

    for(let i = 2+1; i < n; i++){
        dp[i] = Math.min(solve(arr, n-1, dp) + arr[n-1] , solve(arr, n-2, dp) + arr[n-2]);
    }
}



let cost = [1,100,1,1,1,100,1,1,100,1];
console.log('min climbing cost', minClimbing(cost, cost.length));