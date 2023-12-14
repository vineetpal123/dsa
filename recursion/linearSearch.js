// search element one by one
let arr = [3, 5, 1, 2, 6]


let key = 7
console.log(`${key} found : ${checkExistence(arr, key)}`)
function checkExistence(arr, key){
    if(!arr.length) return false 
    if(arr[0] == key) return true 
    arr.shift()
    return checkExistence(arr, key)
}