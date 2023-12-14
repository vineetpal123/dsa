let arr = [3,2,5, 1, 6]
let n = arr.length
console.log('sum is------------>',  printSum(arr, n))

function printSum(arr, n){
    if(n === 0) return 0;    
    let val = printSum(arr, n-1) 
    return val = val + arr[n-1] ;
}

/*
function printSum([1,2,3], 3){
    if(n === 0) return 0;    
    let val = printSum(arr, n-1) 
    return val =+ arr[n-1] ;
}


function printSum([1,2,3], 2){
    if(n === 0) return 0;    
    let val = printSum(arr, n-1) 
    return val = val + arr[n-1] ;
}


function printSum([1,2,3], 1){
    if(n === 0) return 0;    
    let val = printSum(arr, n-1) 
    return val = val + arr[n-1] ;
}


function printSum([1,2,3], 0){
    if(n === 0) return 0;    
}
*/