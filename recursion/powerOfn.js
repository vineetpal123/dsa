// 5 = 5 * 4 * 3 * 2 * 1 = 120 
let input = 5
console.log('power is ->', power(input));

function power(n){
    if(n === 0) return 1
    let small = power(n-1)
    let big = 2 * small
    return big
}

