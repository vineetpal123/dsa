

function dfs(r, c, grid){
    let stack = [[r, c]];
    let area = 0;

    while(stack.length){
        [row, col] = stack.pop();

        if(grid[row][col] != 1) continue;

        area++;
        grid[row][col] = 0;

        if(row < grid.length-1){
            stack.push([row +1, col]);
        }
        if(row > 0){
            stack.push([row -1, col]);
        }
        if(col < grid[0].length-1){
            stack.push([row, col+1]);
        }
        if(col > 0){
            stack.push([row, col -1]);
        }
    }
    return area;
}

function maxIslandArea(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let maxArea = 0;
    let area = 0;
    for (let i = 0; i < rows; i++) {
        for (let y = 0; y < cols; y++) {
            if (grid[i][y] === 1) {
                area = dfs(i, y, grid);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
}

let grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]

console.log('max area of island', maxIslandArea(grid));