/**
 * merge sort
 */


var arr = [12, 11, 13, 5, 6, 7];

let start = 0;
let end = arr.length

console.log('original array', arr)
mergeSort(arr, start, end-1)
console.log('new array', arr)

function mergeSort(arr, l, r){
    if(l >= r) return arr

    let mid = l + parseInt( (r-l)/2)
    mergeSort(arr, l ,mid)
    mergeSort(arr, mid+1, r)
    return merge(arr, l, r)
}


function merge(arr, start, end) {

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
}