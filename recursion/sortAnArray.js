let arr = [0,1,2,4,5, 7]

console.log('Array is sorted', isSort(arr))

function isSort(arr){
    if(arr.length < 2) return true

    if(arr[0] > arr[1]) {
        return false
    } else{
        arr.shift()
        console.log('arr', arr)
        return isSort(arr)
    }
}