function bfsOfGraph(node, adj){
    let visited = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    };
    let queue = [0];
    let ans = []
    while(queue.length){
        let front = queue.shift();
        // node is visited
        if(!visited[front]){
            ans.push(front);
            visited[front] = true;
            adj[front].forEach(elem => {
                queue.push(elem);
            })
            
        }
    }
    console.log('ans', ans)
    return ans;
}

console.log('bfs of graph', bfsOfGraph(5, [[1,2,3],[],[4],[],[]]));