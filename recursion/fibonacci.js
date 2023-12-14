// 5 = 0 1 1 2 3 5 8 13
let input = 6
console.log('fibonacci is ->', fibonacci(input));

function fibonacci(n){
    
    if(n === 0) return 0
    if(n === 1) return 1

    let ans = fibonacci(n-1) + fibonacci(n-2)
    return ans  
}
