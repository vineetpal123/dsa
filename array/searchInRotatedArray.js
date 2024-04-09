function getPivot(arr){
    let start = 0;
    let end = arr.length;
    let mid = Math.floor(start + (end - start)/2);

    while(start <= end){
        if(arr[mid] > arr[mid+1]){
            return mid;
        } else {
            // if mid is greater then last
            if(arr[mid] <= arr[arr.length-1]){
                end = mid -1;
            }else{
                start = mid +1;
            }
            mid = Math.floor(start + (end - start)/2);
        }
    }
    return -1
}

function binarySearch(arr, start, end, target){
    let mid = Math.floor(start + (end -start)/2);

    while(start <= end){
        if(arr[mid] == target) return mid;

        if(arr[mid] < target){
            start = mid +1;
        }else{
            end = mid -1;
        }
        mid = Math.floor(start + (end -start)/2);
    }
    return -1;
}

function search(arr, target){
    if(arr.length == 1 && arr[0] == target) return 0;
    let pivot = getPivot(arr);
    if(pivot == -1) return binarySearch(arr, 0, arr.length, target); 

    if(arr[pivot] == target) return pivot;

    if(target <= arr[arr.length-1]){
        return binarySearch(arr, pivot +1, arr.length, target);
    }else{
        return binarySearch(arr, 0, pivot-1, target);
    }
}

let arr = [4,5,6,7,0,1,2];
let target = 0;
console.log('get pivot', search(arr, target));