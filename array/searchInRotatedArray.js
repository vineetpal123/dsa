let arr = [ 7, 9, 1, 2, 3]

m > 0 && m <= k
r = m- 1 

m < 0 && m <= k

// l = 0
// r = 5 
// m = 2

// k = 3 
// k >= l 
// r = m -1 

// k <=

let index = rotatedArray(arr, 3);


function rotatedArray(arr, key) {
    let l = 0;
    let r = arr.length
    let m = Math.floor(l + (r - l) / 2)

    while (l <= r) {
        if ( arr[m] === key) {
            return m
        }
        else if (arr[l] >= key) {
            r = m - 1
            if(r === -1){
                console.log('inside')
                l = 0
                r = arr.length
                m = Math.floor(l + (r - l) / 2)
                l = m+1
            }
        }
        else if (arr[r] >= key) {
            l = m + 1
        }
        m = Math.floor(l + (r - l) / 2)
    }
    return -1
}



