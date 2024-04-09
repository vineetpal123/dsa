/***
 * Book allocation problem
 * Given that there are N books and M students. Also given are the number of pages in each book in ascending order. The task is to assign books in such a way that the maximum number of pages assigned to a student is minimum, with the condition that every student is assigned to read some consecutive books. Print that minimum number of pages.
 */

let arr = [12, 34, 67, 90];
let m = 2;

function bookAllocation(arr, student) {
    let start = 0; // just for simplicity we are using 0 ,we can also choose min element of array
    let end = arr.reduce((a, b) => a + b);

    // search space : 0 to 100 ans lies between 0 to 100
    let mid = Math.floor(start + (end - start) / 2);
    let ans = -1;
    while (start < end) {
        if (isPossibleAllocation(arr, mid, student)) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor(start + (end - start) / 2);
    }
    return ans;
}

function isPossibleAllocation(arr, mid, student) {
    let pages = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if (pages + arr[i] > mid) {
            counter++;
            pages = 0;
        }
        pages += arr[i];
    }
    if (counter == student -1 ) return true;
    return false;
}

console.log('allocate book', bookAllocation(arr, m));