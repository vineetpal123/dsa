let input = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]




let res = spiral(input)
console.log('res : ', res)
function spiral(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let count = 0;
    let total = row * col;

    let startRow = 0;
    let startCol = 0;
    let endRow = row - 1;
    let endCol = col - 1;
    let ans = []
    while (count < total) {
        // print starting row move from start column to end column
       
            for (let i = startCol; i <= endCol && count < total; i++) {
                ans.push(matrix[startRow][i]);
                count++;
            }
            startRow++;
        

        // print end column move from start row to end Row
        
            for (let i = startRow; i <= endRow && count < total; i++) {
                ans.push(matrix[i][endCol]);
                count++;
            }
            endCol--;
        

        // print end row move from end col to start col
        
            for (let i = endCol; i >= startCol && count < total; i--) {
                ans.push(matrix[endRow][i]);
                count++;
            }
            endRow--;
        

        // print start column move from end row to start row
            for (let i = endRow; i >= startRow && count < total; i--) {
                ans.push(matrix[i][startCol]);
                count++;
            }
            startCol++;
    }
    return ans;
}
