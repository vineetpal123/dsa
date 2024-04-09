/***
 * Book allocation problem
 * Given that there are N books and M students. Also given are the number of pages in each book in ascending order. The task is to assign books in such a way that the maximum number of pages assigned to a student is minimum, with the condition that every student is assigned to read some consecutive books. Print that minimum number of pages.
 */

let arr = [2, 12, 11, 3, 7, 26];
let m = 5;

function aggressiveCow(arr, cow) {
    arr = arr.sort((a, b) => a-b);
    let start = 0;
    let end = arr[arr.length -1];
    let ans = -1;
    let mid = Math.floor(start + (end-start)/2);
    while(start <= end){
        if(isPossibleAllocation(arr, mid, cow)){
            ans = mid;
            start = mid+1;
        } else{
            end = mid-1;
        }
        mid = Math.floor(start + (end-start)/2);
    }
    return ans;
}

function isPossibleAllocation(arr, mid, cow) {
    let firstPos = arr[0];
    let counter = 1;
    let distance = firstPos + mid;
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] >= distance) {
            counter++;
            distance = arr[i] + mid;
        }
    }
    if (counter >= cow ) return true;
    return false;
}

console.log('allocate book', aggressiveCow(arr, m));