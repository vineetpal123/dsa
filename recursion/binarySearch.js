// array must be sort then we will find mid element
let arr = [-1,0,3,5,9,12]
let s = 0
let e = arr.length
let key = -1
console.log(`${key} found : ${checkExistence(arr, key, s, e)}`)

function checkExistence(arr, key, s, e){
    if(!arr.length) return false
    let m = Math.floor(s + (e - s) / 2)
    if(arr[m] == key) return m

    if(arr[m] > key){
        return checkExistence(arr, key, s, m-1)
    }else{
        return checkExistence(arr, key, m+1 , arr.length)   
    }
}