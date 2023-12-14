let arr = [3, 8, 10, 17,22, 1,3]

let pivotIndex = getPivot(arr);
console.log('-----pivotIndex-----', pivotIndex)
function getPivot(arr) {
    let l = 0;
    let r = arr.length
    let m = Math.floor(l + (r - l) / 2)

    while (l <= r) {

        if(arr[m] >= arr[0]){
            l = m+1
        }else{
            r = m-1
            if(arr[m] < arr[m-1]){
                return m
            }
        }
        m = Math.floor(l + (r - l) / 2)
    }
    return r
}



