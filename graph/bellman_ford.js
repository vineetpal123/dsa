let node = 3;
let m = 3;
let edges = [
    [1, 2, 2],
    [2, 3, -1],
    [1, 3, 2]
]
let src = 1;
let dest = 3;

let destination = new Array(node+1).fill(Math.min());
destination[src] = 0;

for(let i = 1; i <= node; i++){
    for(let j = 0; j < m; j++){
        let u = edges[j][0]; // starting node
        let v = edges[j][1]; // end node
        let w = edges[j][2]; // weight 

        if(destination[u] + w < destination[v]){
            destination[v] = destination[u] + w;
        }
    }
}
// check for cycle detection
let flag = 0;
for(let j = 0; j < m; j++){
    let u = edges[j][0]; // starting node
    let v = edges[j][1]; // end node
    let w = edges[j][2]; // weight 

    if(destination[u] + w < destination[v]){
        flag = 1;
        destination[v] = destination[u] + w;
    }
}
// if flag value change means cycle is present
console.log('destination', destination[dest]);
