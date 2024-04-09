let arr1 = [1, 5, 9, 10, 15, 20];
let arr2 = [2, 3, 8, 13];

/**
 * 
 * time complexity : O(n+m)
 * space complexity: O(n+m)
 */
function merge(arr1, arr2){
    let arr = [];
    let first = 0;
    let second = 0;

    while(first < arr1.length && second < arr2.length){
        if(arr1[first] < arr2[second]){
            arr.push(arr1[first]);
            first++;
        }else if (arr1[first] > arr2[second]){
            arr.push(arr2[second]);
            second++;
        }else{
            arr.push(arr1[first]);
            arr.push(arr2[second]);
            first++;
            second++;
        }
    }
    while(first < arr1.length){
        arr.push(arr1[first]);
        first++;
    }
    while(second < arr2.length){
        arr.push(arr2[second]);
        second++;
    }
    return arr;
}

function constantSpaceMerge(arr1, arr2){
    let first = arr1.length -1;
    let second = 0;

    while(arr1[first] > arr2[second]){
        let temp = arr1[first];
        arr1[first] = arr2[second];
        arr2[second] = temp;
        arr1 = arr1.sort((a,b) => a-b);
        arr2 = arr2.sort((a,b) => a-b);
    }
      console.log('check', [...arr1, ...arr2]); 
      return [...arr1, ...arr2]; 
}
console.log('merge', constantSpaceMerge(arr1, arr2));