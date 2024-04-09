// using kahns algorithm

function topologicalSort(node, adj){
    let ans = [];
    let queue = [];
    let cnt = 0; // // use for cycle detection
    // create in degree array
    let inDegreeArray = new Array(node).fill(0);
    Object.keys(adj).forEach(key => {
        let neighbours = adj[key];
        neighbours.forEach(neighbour => {
            inDegreeArray[neighbour]++;
        })
    })
    
    // send elment in queue whose indegree is 0
    for(let i = 0; i < inDegreeArray.length; i++){
        if(inDegreeArray[i] == 0){
            queue.push(i)
        }
    }

    // normal bfs
    while(queue.length){
        let front = queue.shift();
        ans.push(front);

        cnt++; // use for cycle detection

        // reduce neighbour indegree
        adj[front].forEach(neighbour => {
            inDegreeArray[neighbour]--;
            if(inDegreeArray[neighbour] == 0){
                queue.push(neighbour);
            }
        });
    }

    // count is not equal to node then cycle is present

    return ans;
   

}

let node = 6;
let adj = {
    0: [],
    1: [],
    2: [3],
    3: [1],
    4: [1, 0],
    5: [0, 2]
}
console.log('topological sort', topologicalSort(node, adj));