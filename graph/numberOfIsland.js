

function isValid(r, c, grid, ans){
    if(r < 0 || r > grid.length -1 || c < 0 || c > grid[0].length -1 || grid[r][c] == 0){
        return;
    }
    ans.push(1);
    grid[r][c] = 0;
    return true
}
function dfs(r, c, grid, ans){
    // check right side
    if(isValid(r, c, grid, ans)){
        dfs(r, c+1, grid, ans);
        dfs(r, c-1, grid, ans);
        dfs(r-1, c, grid, ans);
        dfs(r+1, c, grid, ans);
    } else { 
        return false;
    }
}

function numberOfIsland(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let cnt = 0
    let ans = [];
    let area = 0;
    for (let r = 0; r <= rows - 1; r++) {
        for (let c = 0; c <= cols - 1; c++) {
            if (grid[r][c] == 1) {
                
                dfs(r, c, grid, ans);
                cnt++;
                if(ans.length > area) area = ans.length;
                ans = [];
            }
        }
    }
    return cnt;
}


let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","1"]
  ];
console.log('number of island', numberOfIsland(grid));