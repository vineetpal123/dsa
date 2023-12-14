// we are using 2 pointer approave to solve below problem
let arr = [0,1,0,0,1,0,1]

function main(arr){
    let l = 0
    let r = arr.length -1 

    while(l < r){
        if(arr[l] === 0){
            l++;
        }
        if(arr[r] === 1){
            r--
        }
        if(l < r){
            let temp = arr[l]
            arr[l] = arr[r]
            arr[r] = temp

            l++
            r--
        }
    }
    console.log('arr', arr)
}
main(arr)