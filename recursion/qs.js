/**
 * find pivot element 
 * make sure after placing value all left element will less 
 * use swapping
 */

let arr = [5,2,3,1];
console.log('original arr', arr);
console.log('quick sort arr', quickSort(arr, 0, arr.length - 1));

function quickSort(arr, l, r) {
    if (l >= r) return arr;

    let partitionIndex = partition(arr, l, r)
    quickSort(arr, l, partitionIndex - 1) // use partition -1 because partition is already sorted
    quickSort(arr, partitionIndex + 1, r)
    return arr;
}

function partition(arr, l, r) {
    let pivot = arr[l];
    let pivotIndex = l;
    
   
    for (let i = l+1; i <= r; i++) {
        if (pivot >= arr[i]) {
            pivotIndex++;
        }
    }
    if(pivotIndex === 0) return pivotIndex;
    
    let temp = arr[pivotIndex];
    arr[pivotIndex] = pivot;
    arr[l] = temp;

    doSorting(arr, l, r, pivotIndex);
    console.log('after do sroting', arr)
    
    return pivotIndex;
}


function doSorting(arr, l, r, pivotIndex) {
    let i = l;
    let j = r;
    while (i < pivotIndex && j > pivotIndex) {

        if (arr[i] <= arr[pivotIndex]) {
            i++;
        } else if (arr[j] >= arr[pivotIndex]) {
            j--;
        } else {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }else if(arr[i] === arr[j]){
                i++;
                j--;
            }
        }
    }
}