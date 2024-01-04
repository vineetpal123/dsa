let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
let target = 8;

console.log('exist', searchInMatrix(matrix, target));


function searchInMatrix(matrix, target){
    let start = 0;
    let end = (matrix.length * matrix[0].length) - 1;
    let col = matrix[0].length;
    let mid = Math.floor(start + (end-start)/2)
    while(start <= end){

        let row = parseInt(mid/col);
        let cols = parseInt(mid%col);

        if(matrix[row][cols] === target) {
            return true;
        }

        if(matrix[row][cols] > target) {
            end = mid -1
        }else {
            start = mid + 1
        }
        mid = Math.floor(start + (end-start)/2)
    }
    return false
}
