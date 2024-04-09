let matrix = [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 1, 0]];

function findCelebrity(){
    let n = matrix[0].length;
    let stack = [];
    for(let i = 0; i < n; i++){
        stack.push(i);
    }
    
    while(stack.length > 1){
        let a = stack.pop();
        let b = stack.pop();

        // check if a knows b
        if(matrix[a][b] == 1){
            stack.push(b);
        } else{
            stack.push(a);
        }
    }
    // verify celebrity
    let celebrity = stack[0];
    let cnt = 0;
    // check row : does celebrity knows any one;
    for(let i = 0; i > n; i++){
        if(matrix[celebrity][i] == 1) cnt++;
    }
    // check col: does any one knows celebrity
    for(let i = 0; i > n; i++){
        if(matrix[i][celebrity] != 1 && i != celebrity) cnt++;
    }
    console.log('stack', stack);
    if (cnt == 0) return celebrity;
    return 'celebrity not found'
}
console.log('celebrity is', findCelebrity(matrix));