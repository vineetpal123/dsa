class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addNode(node){
        if(!this.adjacencyList[node]){
            this.adjacencyList[node] = new Set();
        }
    }
    addEdge(node1, node2, direction){
        if(!this.adjacencyList[node1]){
            this.addNode(node1);
        }
        if(!this.adjacencyList[node2]){
            this.addNode(node2);
        }
        this.adjacencyList[node1].add(node2);
        if(!direction){
            this.adjacencyList[node2].add(node1);
        }
    }
    printAdjList(){
        Object.keys(this.adjacencyList).forEach(key => {
            console.log(key, this.adjacencyList[key]);
        })
    }
}
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

// adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');

graph.printAdjList();