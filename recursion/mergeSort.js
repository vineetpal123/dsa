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


function merge (arr, l, r){
    let mid = l + parseInt((r - l)/2)
    let firstArr = []
    let secondArr = []
    for(let i = l; i <= mid; i++){
        firstArr.push(arr[i])
    } 
    for(let y = mid+1; y <= r; y++){
        secondArr.push(arr[y])
    } 

    let firstIndex = 0;
    let secondIndex = 0;
    let i = l;

    while(i <= r){
        if(firstArr[firstIndex] <= secondArr[secondIndex] || secondIndex == secondArr.length){
            arr[i] = firstArr[firstIndex];
            firstIndex++;
            
        }else if(secondArr[secondIndex] <= firstArr[firstIndex] || firstIndex == firstArr.length){
            arr[i] = secondArr[secondIndex];
            secondIndex++;
        }
        i++;
        
    }
}