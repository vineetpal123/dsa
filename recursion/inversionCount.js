/**
 * return total swap to make array sorted is known inversion count
 */


var arr = [8, 4, 2, 1];

let start = 0;
let end = arr.length

console.log('original array', arr)
console.log('inversion count', mergeSort(arr, start, end-1))
console.log('inversion count', arr)

function mergeSort(arr, l, r){
    
    if(l >= r) return 0;
    let swap = 0;
    let mid = l + parseInt( (r-l)/2)
    swap += mergeSort(arr, l ,mid)
    swap += mergeSort(arr, mid+1, r)
    return merge(arr, l, r, swap)
    
}


function merge(arr, start, end, swap) {

    let arr1 = [];
    let arr2 = [];

    let mid = Math.floor(start + (end - start)/2);

    for(let i = start; i <= mid; i++){
        arr1.push(arr[i])
    }
    for(let i = mid+1; i <= end; i++){
        arr2.push(arr[i])
    }

    let i = 0; // index of first array 
    let j = 0; // index of second array
    let mainindex = start;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            arr[mainindex] = arr1[i];
            i++;
        } else {
            arr[mainindex] = arr2[j];
            // all element in right side of array1 will be greater then element of second array ,so increase inde
            for(let a = i; a < arr1.length; a++){
                swap++;
            }
            j++;
        }
        mainindex++;
    } 
    while (i < arr1.length){
        arr[mainindex] = arr1[i];
        i++;
        mainindex++;
    }
    while (j < arr2.length){
        arr[mainindex] = arr2[j];
        j++;
        mainindex++;
    }
    return swap;
}