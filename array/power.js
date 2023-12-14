// 2 power 4 = 2 power 2 * 2 power 2
// 2 power 5 = 2 * (2 power 2 * 2 power 2)

let input = 2
let pow = 4

let ans = 1

ans = power(input, pow) * power(input, pow)

function power(input, pow){
    let a = pow/2
    let ans = 1 
    for(let i = 0; i < a; i++){
        ans *= input 
    }
    return ans
}
console.log('ans', ans)

