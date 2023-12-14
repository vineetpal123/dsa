


class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
      this.down = null;
    }
}
  

function flatten(node){
    if(node == null) return node

    let current = node
    //let mid = findMid(node)
    //let temp = mid.next
    //mid.next = null;
    let temp = current
    let r = current.next
    let down = temp
    down.next = null
    let right = flatten(r);
    down = convertDownIntoNext(down);
    let ans = merge(down, right)
    return ans
}

function convertDownIntoNext(down){
    let current = down
    let newLinkedList = null;
    let temp = newLinkedList
    while(current){
        if(!newLinkedList){
            newLinkedList = new Node(current.data)
            temp = newLinkedList
            delete temp.down
        }else{
            temp.next = new Node(current.data)
            delete temp.next.down
            temp = temp.next;
        }
        current = current.down
    }
    return newLinkedList;
}

function merge(left, right){
    if(!left) return right
    if(!right) return left
    let ans = null;
    let temp = ans
    while(left !=null || right!= null){

        if(left && right &&  'data' in left && 'data' in right){
            if(left.data <= right.data ){
                if(!ans){
                    ans = new Node(left.data);
                    temp = ans;
                    delete temp.down
                }else{
                    temp.next = new Node(left.data)
                    delete temp.next.down
                    temp = temp.next;
                }
                left = left.next
            }else if(right.data <= left.data){
                if(!ans){
                    ans = new Node(right.data);
                    temp = ans;
                    delete temp.down
                }else{
                    temp.next = new Node(right.data)
                    delete temp.next.down
                    temp = temp.next;
                }
                right = right.next
            }
        }else if(!left){
            if(!ans){
                ans = new Node(right.data);
                temp = ans;
                delete temp.down
            }else{
                temp.next = new Node(right.data)
                delete temp.next.down
                temp = temp.next;
            }
            right = right.next
        }else if(!right){
            if(!ans){
                ans = new Node(left.data);
                temp = ans;
                delete temp.down
            }else{
                temp.next = new Node(left.data)
                delete temp.next.down
                temp = temp.next;
            }
            left = left.next
        }
    }
    return ans;
    //console.log('ans', ans)
}

// Creating a linked list with random pointer
const head = new Node(3);
head.next = new Node(10);
head.next.next = new Node(7);
head.next.next.next = new Node(14);
head.down = new Node(9);
head.down.down = new Node(17);
head.next.down = new Node(47);
head.next.next.down = new Node(15);
head.next.next.down.down = new Node(30);
head.next.next.next.down = new Node(22);

console.log('original linked list', JSON.stringify(head))
let newLinkedList = flatten(head)
console.log('new linked list', JSON.stringify(newLinkedList))