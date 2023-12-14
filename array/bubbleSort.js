// for i th round set nth largest element at right 


let input = [2, 1, 3,8, 5, 7, 4]
console.log('sort array', sort(input))

function sort(input) {
    for (let i = 0; i < input.length; i++) {
        
        let swap = false
        for(let j = 0; j < input.length; j++){
            let temp = input[j]
            if(input[j] > input[j+1]) {
                swap = true
                input[j] = input[j+1]
                input[j+1] = temp
            }
        }
        if(!swap) return input
    }
}




