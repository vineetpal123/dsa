let arr = [1,2,3,4,5,6,7,8,9]

let index = main(arr, 9)
console.log('index---', index)
function main(arr, elem) {
    let l = 0
    let r = arr.length -1 
    let m = Math.floor(l+ (r-l)/2)
    while (l <= r) {
        if (arr[m] === elem) {
            return m
        } else if (arr[m] > elem) {
           r = m -1
        } else if (arr[m] < elem) {
            l = m+1
        }
        m =  Math.floor(l+ (r-l)/2)
    }
    return -1
}
