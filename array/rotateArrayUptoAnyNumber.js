/**
 * two approach first use mod and set element, but in that case
 * space will be O(n)
 * 
 * second approch 
 */

let k = 4;
let arr = [ 1, 2, 3, 4, 5, 6, 7];
arr = [1,2, 3]

k = k % arr.length;

// first reverse arr
arr = reverseArr(arr, 0, arr.length -1);

// reverese only kth element
arr = reverseArr(arr, 0, k-1)

// reversr array after kth element
arr = reverseArr(arr, k, arr.length -1);

console.log(arr)
function reverseArr(arr, start, end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr
}