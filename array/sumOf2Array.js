let arr1 = [9,9,9]
let arr2 = [9,9,9]

let firstArrPointer = arr1.length -1;
let secondArrPointer = arr2.length -1;

let cnt = arr1.length >= arr2.length ? arr1.length -1 : arr2.length -1;
let ans = [];
let carry = 0;
while(cnt >= 0){
    let a = arr1[firstArrPointer] ? parseInt(arr1[firstArrPointer]): 0;
    let b =  arr2[secondArrPointer] ? parseInt(arr2[secondArrPointer]): 0;
    
    let sum = a + b + carry;
    carry = Math.floor(sum/10)
    sum = sum%10;
    ans.push(sum)
    firstArrPointer--;
    secondArrPointer--;
    cnt--;
}
if(carry) ans.push(carry)

// reverse array
let start = 0;
let end = ans.length -1;

while(start <= end){
    let temp = ans[start];
    ans[start] = ans[end];
    ans[end] = temp;
    start++;
    end--;
}
console.log('ans', ans)