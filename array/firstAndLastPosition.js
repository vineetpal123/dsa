let arr = [1,2,3,3,3,5,6,7,8,9]

// l = 2
// r = 3
// m = 2

let first = firstOccurence(arr, 15)
let last = lastOccurence(arr, 15)
console.log('first---', first)
console.log('last---', last)
function firstOccurence(arr, elem) {
    let l = 0
    let r = arr.length -1 
    let m = Math.floor(l+ (r-l)/2)
    let ans = -1
    while (l <= r) {
        if (arr[m] === elem) {
            ans = m
            r = m -1
            //return m
        } else if (arr[m] > elem) {
           r = m -1
        } else if (arr[m] < elem) {
            l = m+1
        }
        m =  Math.floor(l+ (r-l)/2)
    }
    return ans
}
function lastOccurence(arr, elem) {
    let l = 0
    let r = arr.length -1 
    let m = Math.floor(l+ (r-l)/2)
    let ans = -1
    while (l <= r) {
        if (arr[m] === elem) {
            ans = m
            l = m +1
            //return m
        } else if (arr[m] > elem) {
           r = m -1
        } else if (arr[m] < elem) {
            l = m+1
        }
        m =  Math.floor(l+ (r-l)/2)
    }
    return ans
}
