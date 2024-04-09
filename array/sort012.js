// Known as dutch flag problem
let arr = [1,1,1, 2, 1, 0, 2, 1, 0, 0,1,1]

// [0,0,0,0,1,1,2,2]
// [0, 0, 0, 0, 1, 1, 2, 2]

// l = 4
// m = 4
// r = 5

function main(a){
    let low = 0; // it will save 0 element
    let mid = 0; // it will save mid element which is 1
    let high = a.length -1; // it will save high element which is 2

    while(mid <= high){
        if(a[low] == 0){
            low++;
            mid++;
        } else if(a[mid] == 2){
            let temp = a[mid];
            a[mid] = a[high];
            a[high] = temp;
            high--; 
        } else if(a[mid] == 0){
            let temp = a[mid];
            a[mid] = a[low];
            a[low] = temp;

            low++;
            mid++;
        } else if(a[mid] == 1){
            mid++;
        }
    }
    return a;
}
main(arr)