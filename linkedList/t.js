class Node {
    constructor(x) {
      this.val = x;
      this.next = null;
    }
}

let input = {
    "head": {
        "val": 4,
        "next": {
            "val": 3,
            "next": {
                "val": 2,
                "next": {
                    "val": 1,
                    "next": null
                }
            }
        }
    },
    "size": 4
}

function mergeSort(head){

    if(head == null) return head;

    let mid = findMiddleElement(head);
    let temp = head;
    let leftNode = temp;
    let leftNodeTemp = leftNode;
    while(temp && temp.next.val != mid.val){
        //if(temp == mid) temp = null;
        leftNodeTemp.next =  temp.next;
        leftNodeTemp = leftNodeTemp.next;
        temp = temp.next;
    }
    leftNodeTemp.next = null;
    //let left = mergeSort()
    //let right = mergeSort(mid);

    console.log('mid', mid);
    //return merge(left, right)
    
}

function findMiddleElement(head){
    let fast = head.next.next;
    let slow = head.next;

    while(fast!= null && slow != null){
        slow = slow.next;
        if(fast.next){
            fast = fast.next.next;
        }else{
            fast = null;
        }
    }
    return slow;
}

console.log('merge sort', mergeSort(input.head));
