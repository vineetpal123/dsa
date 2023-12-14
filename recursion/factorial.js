// 5 = 5 * 4 * 3 * 2 * 1 = 120 
let input = 5
console.log('factorial is ->', factorial(input));

function factorial(n){
    if(n === 0) return 1

    let small = factorial(n-1)
    let big = n * small
    return big
}
// how it will work 
/*
  stack
factorial(0) it will return 1 to line no 8 
factorial(1) n * 1 = 1 
factorial(2) 2 * 1 = 2
factorial(3) 3 * 2 = 6 
factorial(4) 4 * 6 = 24
factorial(5) 5 * 24 = 120
*/


