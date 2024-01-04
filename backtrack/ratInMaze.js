/**
 * Consider a rat placed at (0, 0) in a square matrix of order N * N. It has to reach the destination at (N - 1, N - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell.
 */
let maze = [
    [1,0,0,0], [1,1,0,1], [1,1,0,0], [0,1,1,1]
]
console.log('find path', findPath(maze, 4))
function findPath(m, n){
    let ans = [];
    getallpath(maze, n, 0, 0, ans, "")
    return ans;
}

function getallpath(matrix, n, row, col, ans, cur) {
    if (row >= n || col >= n || row < 0 || col < 0 || matrix[row][col] === 0) {
        return;
    }
    
    if (row === n - 1 && col === n - 1) {
        ans.push(cur);
        return;
    }
    
    matrix[row][col] = 0;
    
    getallpath(matrix, n, row + 1, col, ans, cur + "D");
    getallpath(matrix, n, row, col - 1, ans, cur + "L");
    getallpath(matrix, n, row, col + 1, ans, cur + "R");
    getallpath(matrix, n, row - 1, col, ans, cur + "U");
    
    matrix[row][col] = 1;
    
    return;
    }



