

/**
 * create distance array and save INF in all element
 * set src distance to 0;
 * create obj which will save src and distance , save 
 */

function getShortestPath(node, src, adj){
    const INF = Math.min();
    let distance = new Array(node).fill(INF);
    distance[src] = 0; 
    let setObj = {};
    setObj[src] = distance[src];
    
    while(Object.keys(setObj).length){
       
        let minNode = Math.min(...Object.keys(setObj));
        let vertex = minNode;
        let dist = setObj[vertex]; 

        adj[vertex].forEach( neighbourArr => {
            let node1 = neighbourArr[0];
            let dist1 = neighbourArr[1];

            let finalDist = dist + dist1;
            if(distance[node1] > finalDist){
                distance[node1] = finalDist;
                setObj[node1] = finalDist;
            }
            
        })

        // delete min node 
        delete setObj[minNode];
    }

    console.log('distance', distance);
}
let node = 9;
let src = 0;
let adj = [
    [[1, 4], [7, 8]],
    [[0, 4], [2, 8], [7, 11]],
    [[1, 8],[8, 2],[3, 7], [5, 4]],
    [[2, 7], [5, 14], [4, 9]],
    [[3, 9], [5, 10]],
    [[2, 4], [3, 14], [4, 10], [6, 2]],
    [[5, 2], [8, 6], [7, 1]],
    [[0, 8], [6, 1], [8, 7], [1, 11]],
    [[2, 2], [7, 7], [6, 6]]
]
console.log('shortest path', getShortestPath(node, src, adj))