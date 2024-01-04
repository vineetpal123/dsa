let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
let target = 51;

console.log('exist', searchInMatrix(matrix, target));


function searchInMatrix(matrix, target){
    
    let rows = matrix.length;
    let cols = matrix[0].length;
    let rowIndex = 0;
    let colIndex = cols -1;    

    while(rowIndex < rows && colIndex >= 0){
        let element = matrix[rowIndex][colIndex]

        if(element === target) {
            return true;
        }

        if(element < target) {
            rowIndex++;
        }else {
            colIndex--;
        }
    }
    return false
}
