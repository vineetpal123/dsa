let arr = [1,2,3,5,7,2,1]

let index = getPeakIndexOfMountain(arr)
console.log('index---', index)

function getPeakIndexOfMountain(arr) {
    let l = 0
    let r = arr.length -1 
    let m = Math.floor(l+ (r-l)/2)
    
    while (l <= r) {
        if (arr[m] > arr[m+1] && arr[m] > arr[m-1]) {
            return m
        } else if (arr[m] < arr[m+1]) {
           l = m+1
        } else if (arr[m] < arr[m-1]) {
            r = m-1
        }
        m =  Math.floor(l+ (r-l)/2)
    }
    return -1
}

