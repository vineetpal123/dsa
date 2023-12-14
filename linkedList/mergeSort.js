


class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
    }
  }
 
function findMid(node){
    let current = node;
    let fast = current;
    let slow = current;

    let temp = fast
    while( temp != null && temp.next!= null){
        fast = fast.next.next;
        if(fast){
            slow = slow.next;
        }
        if(!fast) break;
        temp = fast;
        
    }
    return slow;
}  

function mergeSort(node){
    if(node == null || node.next == null) return node

    let current = node
    let mid = findMid(node)
    let temp = mid.next
    mid.next = null;
    let left = mergeSort(node);
    let right = mergeSort(temp);
    
    let ans = merge(left, right)
    return ans
}

function merge(left, right){
    if(!left) return right
    if(!right) return right
    let ans = null;
    let temp = ans
    while(left !=null || right!= null){

        if(left && right &&  'data' in left && 'data' in right){
            if(left.data <= right.data ){
                if(!ans){
                    ans = new Node(left.data);
                    temp = ans;
                }else{
                    temp.next = new Node(left.data)
                    temp = temp.next;
                }
                left = left.next
            }else if(right.data <= left.data){
                if(!ans){
                    ans = new Node(right.data);
                    temp = ans;
                }else{
                    temp.next = new Node(right.data)
                    temp = temp.next;
                }
                right = right.next
            }
        }else if(!left){
            if(!ans){
                ans = new Node(right.data);
                temp = ans;
            }else{
                temp.next = new Node(right.data)
                temp = temp.next;
            }
            right = right.next
        }else if(!right){
            if(!ans){
                ans = new Node(left.data);
                temp = ans;
            }else{
                temp.next = new Node(left.data)
                temp = temp.next;
            }
            left = left.next
        }
        //temp = temp.next
        
    }
    return ans;
    //console.log('ans', ans)
}

// Creating a linked list with random pointer
const head = new Node(4);
head.next = new Node(19);
head.next.next = new Node(14);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(-3);
head.next.next.next.next.next = new Node(1);
head.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next = new Node(5);
head.next.next.next.next.next.next.next.next = new Node(11);
head.next.next.next.next.next.next.next.next.next = new Node(15);

// const lefthead = new Node(2);
// lefthead.next = new Node(5);

// const righthead = new Node(3);
// righthead.next = new Node(4);

//merge(lefthead, righthead)
console.log('original linked list', head)
let newLinkedList = mergeSort(head)
console.log('new linked list', JSON.stringify(newLinkedList))