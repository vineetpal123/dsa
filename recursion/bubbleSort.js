// for i th round set nth largest element at right 


let input = [2, 1, 3,8,-1,0, 5, 7, 4]
input = [1]
let n = input.length - 1
console.log('sort array', sort(input, n))

function sort(input, n) {
    let swap = false
    if(n === 0 || n === 1) input ;
    for(let j = 0; j < n; j++){
        let temp = input[j]
        if(input[j] > input[j+1]) {
            swap = true
            input[j] = input[j+1]
            input[j+1] = temp
        }
    }
    if(!swap) return input
    return sort(input, n-1)
}




