/**
 * previously in isSafe function we are checking left ,upper diagonal and down diagonal in O(n) 
 * know we are using that operation in O(1)
 */
let result = solveNQueens(4);
console.log('solve n queents', result);

function solveNQueens(n){
    let board = [...new Array(n)].map(elem => new Array(n).fill("."));
    let ans = [];
    let col = 0;
    let mapping = {
        left: {},
        upperDiagonal: {},
        lowerDiagonal: {}
    };
    solve(board, ans, col, n, mapping);
    return ans;
}
//0,0 ---------- 3,3

function addSolution(ans, board, n){
    let temp = [];
    

    for(let i = 0; i < n; i++){
        let str = '';
        for(let j = 0; j < n; j++){
            //temp.push(board[i][j])
            str += board[i][j]; 
        }
        temp.push(str)
    }
    //temp.join(',');
    ans.push(temp);
}

function solve(board, ans, col, n, mapping){
    if(col == n){
        addSolution(ans, board, n)
        return;
    }
    
    for(let row = 0; row < n; row++){
        if(isSafe(board, row, col, n, mapping)){
            board[row][col] = 1;
            mapping.left[row] = 1;
            let upperDiagonalIndex = (n-1) + col - row;
            mapping.upperDiagonal[upperDiagonalIndex] = 1;

            let lowerDiagonalIndex = col + row;
            mapping.lowerDiagonal[lowerDiagonalIndex] = 1;

            solve(board, ans, col + 1, n, mapping)
            board[row][col] = '.';
            delete(mapping.left[row]);
            delete(mapping.upperDiagonal[upperDiagonalIndex]);
            delete(mapping.lowerDiagonal[lowerDiagonalIndex]);
        }
    }
}

function isSafe(board, row, col, n, mapping = {}){
    let x = row;
    let y = col;
    // check if left side not allowed
    // while(y >= 0){
    //     if(board[x][y] === 1) {
    //         return false;
    //     }
    //     y--;
    // }

    if(mapping.left[x] === 1) return false;
    let d = (n-1) + (y - x);
    if(mapping.upperDiagonal[d] === 1) return false;
    let u = x + y;
    if(mapping.lowerDiagonal[u] === 1) return false;

    //x = row;
    //y = col;
    // check upper diagonal
    // while(y >= 0 && x >= 0){
    //     if(board[x][y] === 1) {
    //         return false;
    //     }
    //     x--;
    //     y--;
    // }

    // x = row;
    // y = col;
    // check lower diagonal
    // while(y >= 0 && x < n){
    //     if(board[x][y] === 1) {
    //         return false;
    //     }
    //     x++;
    //     y--;
    // }
    return true;
}

