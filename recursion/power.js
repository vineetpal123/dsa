// 2 power 4 = 2 power 2 * 2 power 2
// 2 power 5 = 2 * (2 power 2 * 2 power 2)

let input = 2
let pow = 17
if(pow%2){
    pow = pow-1
    console.log('power', input * power(input, pow))
}else{
    console.log('power', power(input, pow))
}


function power(input, pow){
    if(pow == 0) return 1
    if(pow == 1) return input
    return power(input, pow/2) * power(input, pow/2)
}


