
let input = 432
let arr = ['zero', 'first', 'second', 'three', 'four']
console.log('print number is ->', print(arr, input));


function print(arr, n){
   if(n === 0) return ''
   let txt = print(arr, parseInt(n/10))
   txt = txt + ' ' + arr[n%10]
   return txt
    
}

