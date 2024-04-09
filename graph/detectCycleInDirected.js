// detect cycle in directed graph

function dfsCycle(node, visited, dfsVisited, adj) {
    visited[node] = true;
    dfsVisited[node] = true;
    let neighbours = adj[node];

    for (let i = 0; i < neighbours.length; i++) {
        let neighbour = neighbours[i];

        if (!visited[neighbour]) {
            let res = dfsCycle(neighbour, visited, dfsVisited, adj);
            if (res) return res;
        } else {
            // node is visited check for dfsVisited, 
            
            if(dfsVisited[neighbour]){
                return neighbour;
            }
        }
    }
    dfsVisited[node] = false;
    return false;
}

function detectCycleInDirectedGraph(node, adj) {
    let visited = {};
    let dfsVisited = {};
    for (let i = 0; i < node; i++) {
        let res = dfsCycle(i, visited, dfsVisited, adj);
        if (res) return res;
    }
}
let adj = [[1], [2, 3], [6, 7], [4], [5], [3], [], [6]]
console.log('cycle is ', detectCycleInDirectedGraph(8, adj))