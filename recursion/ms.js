/**
 * merge sort two sorted array using constant space o(1)
 */

let arr1 = [1];
let arr2 = [2, 4, 6, 8];


function merge(arr1, arr2) {
    let arr1Index = 0;
    let arr2Index = 0;
    let i = 0;

    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if (arr1[arr1Index] < arr2[arr2Index]) {
            arr1Index++;
            i++;
        } else if (arr1[arr1Index] > arr2[arr2Index]) {
            let temp = arr1[arr1Index];
            arr1[arr1Index] = arr2[arr2Index];
            arr2[arr2Index] = temp;
            arr1Index++;
            i++;
            checkSorting(arr2, arr2Index);
        }
    }
    while (arr2Index < arr2.length){
        arr1.push(arr2[arr2Index]);
        arr2Index++;
    }
    console.log('completed', arr1)
}

function checkSorting(arr, index) {
    // swap element
    while (index < arr.length) {
        if (arr[index] > arr[index + 1]) {
            let temp = arr[index];
            arr[index] = arr[index + 1];
            arr[index + 1] = temp;
        }
        index++;
    }
}
