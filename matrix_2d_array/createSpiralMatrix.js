let input = 4


let res = createSpiral(input)
console.log('res : ', res)
function createSpiral(n) {

    let total = n * n;
    let count = 1;
    let top = 0
    let left = n - 1;
    let bottom = 0;
    let right = n - 1;
    let dir = 0

    let matrix = []
    for (let i = 0; i < n; i++) {
        let temp = [...Array(n)]
        matrix.push(temp)
    }

    while (count <= total) {

        // top row
        if (dir === 0) { // direction 1 - traverse from left to right
            for (let c = top; c <= right; c++) {
                console.log(count)
                matrix[top][c] = count++
            }
            right--;
            top++;
            bottom++;
            dir++
        } else if (dir === 1) { // direction 1 - traverse from top to bottom
            for (let c = bottom; c <= right; c++) {
                console.log(count)
                matrix[bottom][right] = count++
                bottom++;
            }
            left--;
            dir++
        } else if (dir === 2) { // direction 1 - traverse from right to left
            for (let c = left; c >= 0; c--) {
                console.log(count)
                matrix[bottom-1][c] = count++
                
            }
            bottom--
            dir++
        } else if (dir === 3) { // direction 1 - traverse from bottom to top
            for (let r = bottom - 1; r > 0; r--) {
                console.log(count)
                matrix[r][0] = count++
                bottom--;
            }
            dir = 0
            right--;
        } 

    }

    return matrix
}
