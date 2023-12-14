//The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

//If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

let arr = [2,1,-1]

let pivotIndex = getPivotIndex(arr);
console.log('-----pivotIndex-----', pivotIndex)
function getPivotIndex(arr) {
    
    let rightSum = 0
    arr.forEach((elem) => rightSum  += elem)
    let leftSum = 0   
    
   for(let i = 0; i < arr.length; i++){
    let curr = arr[i]
    rightSum -= curr
    if (leftSum === rightSum) return i;  

    leftSum += curr
   }
    return -1
}



