/**
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
 */
let res = nqueen(4)
console.log('queen placement', JSON.stringify(res));

function nqueen(n){
    let board = [...new Array(n)].map( ele => new Array(n).fill("0") );
    let ans = [];
    solve(0, board, ans, n)    
    return ans;
}

function addSolution(ans, board, n){
    let temp = [];

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            temp.push(board[i][j])
        }
    }
    ans.push(temp);
}

function isSafe(row, col, board, n){
    let x = row;
    let y = col;

    // check for same row
    while(y>=0){
        if(board[x][y] === 1){
            return false;
        }
        y--;
    }

    x = row;
    y = col;

    // check for upper diagonal user formula (col + row)
    while(x >=0 && y >=0){
        if(board[x][y] == 1){
            return false;
        }
        y--;
        x--;
    }

    x = row;
    y = col;

     // check for lower diagonal use forumala ((n-1) + col -row)
     while(x <n && y >=0){
        if(board[x][y] == 1){
            return false;
        }
        y--;
        x++ ;
    }
    return true;
}

function solve(col, board, ans, n){
    // base case 
    if(col == n){
        addSolution(ans, board, n);
        return;
    }

    // solve 1 case and rest recursion will take care

    for(let row = 0; row < n; row++){
        if(isSafe(row, col, board, n)){
            // if placing queen is safe
            board[row][col] = 1;
            solve(col +1, board, ans, n);
            // backtrack
            board[row][col] = 0;
        }
    }
}