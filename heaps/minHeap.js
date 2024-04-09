class MinHeap{
    constructor(){
        this.heap = [];
    }
    // Helper Methods
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length;
    }
    hasParent(index){
        return this.getParentIndex(index) >= 0;
    }
    add(item){
        this.heap.push(item);
        this.heapifyUp(); 
    }
    parent(index){
        return this.heap[this.getParentIndex(index)];
    }
    rightChild(index){
        return this.heap[this.getRightChildIndex(index)];
    }
    leftChild(index){
        return this.heap[this.getRightChildIndex(index)];
    }
    heapifyUp(){
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    swap(indexOne, indexTwo){
        let temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }
    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }
    heapifyDown(){
        let index = 0;
    }
}

// Creating the Heap
var heap = new MinHeap();
 
// Adding The Elements
heap.add(10);
heap.add(15);
heap.add(30);
heap.add(40);
heap.add(50);
heap.add(100);
heap.add(40);