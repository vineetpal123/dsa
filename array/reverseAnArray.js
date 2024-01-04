/**
 * we can use two pointer approch for that
 */

let arr = [1, 3, 2, 11, 5, 6]

let start = 4;
let end = arr.length -1;

while(start <= end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}
console.log('arr', arr);