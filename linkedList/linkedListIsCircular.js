/**
 * check link list is circular
 * A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.
 */

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

function createNewNode(data){
    let temp = new Node()
    temp.data = data;
    temp.next = null;
    return temp;
}

let head = createNewNode(1);
head.next = createNewNode(2);
head.next.next = createNewNode(3);
head.next.next.next = head;

function checkCircular(head){
    if(head == null) return true;

    let temp = head.next;

    while(temp != null && temp != head){
        temp = temp.next;
    }

    if(temp == head) return true;

    return false;

}

console.log('list is cicular ',checkCircular(head));