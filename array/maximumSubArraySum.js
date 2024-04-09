// use kadane algorithm
// return subarray
function maxSumSubArray(arr){
    let sum = 0;
    let maxSum = arr[0];
    let subArr = [arr[0]];
    let i = 0;
    let tempSubArr = [arr[0]];
    while(i < arr.length){
        sum = sum + arr[i];
        if(maxSum < sum){
            //subArr.push(arr[i]);
            tempSubArr.push(arr[i]);
            subArr = [...tempSubArr];
            maxSum = sum;
        }else{
            tempSubArr.push(arr[i]);
        }
        //maxSum = Math.max(maxSum, sum);
        if(sum < 0){
            sum = 0;
            subArr = [];
            tempSubArr = [];
        }
        i++;
    }
    // maxSum  have total subarray sum
    return subArr;
}

let arr = [-2, -5, 6, -2, -3, 1, 5, -6] ;
console.log('maxSUmSUbArray', maxSumSubArray(arr));