function dfsOfGraph(node, adj){
    let visited = {};
    let ans = [];
    // for loop is using to handle graph which have multiple components
    for(let i = 0; i < node; i++){
        let components = []
        if(!visited[i]){
            dfs(i, visited, components, adj)
            ans.push(components);
        }   
    }
    return ans;
}
function dfs(node, visited, components, adj){
    components.push(node);
    visited[node] = true;

    // recursive call for every connected node
    adj[node].forEach(child => {
        if(!visited[child]){
            dfs(child, visited, components, adj)
        }
    })
}

console.log('dfs of graph', dfsOfGraph(5, [[2,3,1],[0],[0,4],[0],[2]]));
