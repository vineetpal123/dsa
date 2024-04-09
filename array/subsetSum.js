let arr = [2, 3, 4, 5, 12, 34];
let target = 9;

function isSubsetSum(arr, target){
    let i = 0
    let subsetSum = arr[i];
    let isSumExist = false;
    let isExist = false;
    let y = i+1;
    let subsets = []
    i++;
    let cnt = 1;
    let tempArr = [];
    let ans = Math.min();
    while(i < arr.length && !isExist){
        if(subsetSum == target){
            //isExist = true;
            ans = Math.min(ans, cnt);
            tempArr.push(cnt);
            i = y;
            subsetSum = arr[i];
            y++;
            cnt = 1;
        } else if(subsetSum + arr[i] <= target){
            subsetSum += arr[i];
            cnt++;
            i++;
        } else {
            subsetSum = arr[i];
            cnt = 1;
            i = y;
            y++;
            i++;
        }
    }
    
   
    console.log('isSumExist', isExist);

}

console.log("isSubsetSum", isSubsetSum(arr, target));