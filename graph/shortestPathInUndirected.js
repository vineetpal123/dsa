// 



function shortestPath(src, target, node, adj){
    let visited = new Array(node).fill(0);
    let parent = new Array(node);
    parent[src] = -1;
    let queue = [src];

    while(queue.length){
        let front = queue.shift();
        
       
        adj[front-1].forEach(neighbour => {
            if(!visited[neighbour]){
                visited[neighbour] = 1;
                parent[neighbour] = front;
                queue.push(neighbour);
            }
        })
    }

    queue.push(target);
    let stack = [target];
   
    while(queue.length){
        let front = queue.shift();
        if(front == src){
          break;
        }
        let parentNode = parent[front];
        queue.push(parentNode);
        stack.push(parentNode);
    }
    
    let finalArr = [];
    while(stack.length){
        let top = stack.pop();
        finalArr.push(top);
    }
    return finalArr;
}
let src = 1;
let target = 8;
let node = 8;
let adj = [
    [2,3,4],
    [1,5],
    [1,8],
    [1,6],
    [2,8],
    [4,7],
    [6,8],
    [3,5,7]
]
console.log('shoretest path in undirected', shortestPath(src, target, node, adj))
