
function dfs(node, visited, stack, adj){
    
    visited[node] = true;
    
    adj[node].forEach(neighbour => {
        if(!visited[neighbour]){
            dfs(neighbour, visited, stack, adj)
        }
    })
    stack.push(node);
}

function topologicalSort(node, adj){
    let visited = {};
    let stack = [];
    for(let i = 0; i < node; i++){
        if(!visited[i]){
            dfs(i, visited, stack, adj);
        }
    }
    let arr = [];
    while(stack.length){
        let top = stack.pop();
        arr.push(top);
    }
    return arr;
}

let node = 6;
let adj = {
    0: [],
    1: [3],
    2: [3],
    3: [],
    4: [1, 0],
    5: [0, 2]
}
console.log('topological sort', topologicalSort(node, adj));