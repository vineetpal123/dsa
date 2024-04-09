/**
 * 
 * Find the smallest positive number missing from an unsorted array
 */

let arr = [3,4,-1,1];
arr = [1,1]
console.log('solve', solve(arr));

function solve(arr){
    // if any element is 0 or less than 0 set arr.length + 1
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 1){
            arr[i] = arr.length +1;
        }
    }

    // check every element index and if it is less than 0 mark that value negative
    for(let i = 0; i < arr.length; i++){
        let elem = Math.abs(arr[i]);
        if(arr[elem-1]){
            if(arr[elem-1] > 0) {
                arr[elem-1] =  - arr[elem-1]
            };
        }
    }
    // mark negative means that value exists
    // if any positive element found that means i+1 is missing element  
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) return i+1;
    }
    // if all elements are negative , missing element is arr.length + 1
    return arr.length +1;
}
