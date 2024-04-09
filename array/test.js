let arr = [1,2,1,0,2,1,2];
arr = [0, 2, 1, 2, 0]
console.log('get pivot', solve(arr));

function solve(arr){
    let l = 0;
    let r = arr.length -1;
    let i = 0;

    while(i <= r){
       while(arr[l] == 0){
        l++;
       }
       while(arr[r] == 2){
        r--;
       }

       if(arr[i] == 2 && i < r){
        let temp = arr[i];
        arr[i] = arr[r];
        arr[r] = temp;
       }

       if(arr[i] == 0 && i > l){
        let temp = arr[i];
        arr[i] = arr[l];
        arr[l] = temp;
       }
       i++;
    }
    return arr;
}
