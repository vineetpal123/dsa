// detect cycle in undirected graph

function detectCycle(node, adj) {
    let visited = {};
    let parent = { 0: -1 };
    
    for(let i = 0; i < node; i++){
        let res = dfs(i, visited, parent, adj);
        if(res) return true;
    }
}
function dfs(node, visited, parent, adj){
    visited[node] = true;
    for(let i = 0; i < adj[node].length; i++){
        let neighbour = adj[node][i];
        if(visited[neighbour] && neighbour != parent[node]){
            console.log('cycle present', neighbour);
            return neighbour;
        } else if(!visited[neighbour]){
            parent[neighbour] = node;
            return dfs(neighbour, visited, parent, adj);
        }
    }
}


let node = 5;
let adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]
console.log('detect cycle', detectCycle(node, adj))