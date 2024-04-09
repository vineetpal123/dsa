/**
 * Given two numbers represented by two lists, write a function that returns the sum in the form of a linked list.
 * Input: 
List1: 5->6->3 // represents number 563 
List2: 8->4->2 // represents number 842 
Output: 
Resultant list: 1->4->0->5 // represents number 1405 
 */

let input2 = {
    "head": {
        "val": 5,
        "next": {
            "val": 6,
            "next": {
                "val": 3,
                "next": null
            }
        }
    },
    "size": 4
}
let input1 = {
    "head": {
        "val": 8,
        "next": {
            "val": 4,
            "next": {
                "val": 2,
                "next": null
            }
        }
    },
    "size": 4
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function add(head1, head2) {
    let h1 = reverse(head1);
    let h2 = reverse(head2);

    let sumList = new Node('dummy');
    let temp = sumList;
    let sum = '';
    let carry = 0;
    while (h1 != null && h2 != null) {
        if(h1.val + h2.val + carry < 10){
            sum = h1.val + h2.val + carry
            carry = 0;
            temp.next = new Node(sum);
        } else{
            sum = (h1.val + h2.val + carry)%10;
            temp.next = new Node(sum);
            carry = Math.floor((h1.val + h2.val + carry)/10);
        }
        temp = temp.next;
        h1 = h1.next;
        h2 = h2.next;
    }
    while(h1 != null){
        sum = h1.val + carry;
        carry = 0;
        h1 = h1.next;
        temp.next = new Node(sum);
        temp = temp.next;
    }
    while(h2 != null){
        sum = h2.val + carry;
        carry = 0;
        h2 = h2.next;
        temp.next = new Node(sum);
        temp = temp.next;
    }
    if(carry){
        sum = carry;
        carry = 0;
        temp.next = new Node(sum);
        temp = temp.next;
    }

    return reverse(sumList.next);
    console.log('sum', sum);
}

function reverse(head) {
    let curr = head;
    let prev = null;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

//console.log('reverse element', JSON.stringify(reverse(input.head, 3))); 
console.log('reverse element', JSON.stringify(add(input1.head, input2.head)));  