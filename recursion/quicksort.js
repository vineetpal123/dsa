var arr = [5,2,3,1];

let start = 0;
let end = arr.length

console.log('original array', arr)
quickSort(arr, start, end - 1)
console.log('new array', arr)

function quickSort(arr, l, r) {
    if(l > r) return arr
    let pivot = sort(arr, l, r)
    quickSort(arr, l, pivot-1)
    quickSort(arr, pivot+1, r)
    return arr;
}

function sort(arr, start, end) {
    let first = arr[start];
    let cnt = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] <= first) {
            cnt++;
        }
    }
    if(cnt == 0) return cnt 
    let pivot = cnt
    //let temp = first;
    arr[start] = arr[pivot]
    arr[pivot] = first

    // check left element lesser then pivot element and right element is greater
    let left = start;
    let right = end;

    while(pivot > left && pivot < right){
        if(arr[left] < arr[pivot]){
            left++;
        }else if(arr[right] > arr[pivot]){
            right--;
        }else{
            if (arr[left] > arr[right]) {
                let temp = arr[left]
                arr[left] = arr[right]
                arr[right] = temp;
                left++;
                right--;
            }else if( arr[left] == arr[right]){
                left++;
                right--;
            }
        }
        
    }
    
    return pivot;
}
