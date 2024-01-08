class Node 
{
    constructor(key) 
    {
        this.val = key;
        this.next = null;
    }
}
 
function newNode(key)
{
    let temp = new Node(key);
    return temp;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = head.next.next;

function detectThroughFloydAlgo(head){
    let fast = head;
    let slow = head;
    while(fast!= null && slow != null ){
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow) return fast;
    }
    return false;
}

function startingOfLoop(head, intersection){
    let slow = head;
    let temp = intersection;
    while(slow.next != null){
        if(slow == temp) return slow;
        slow = slow.next;
        temp = temp.next;
    }
    return false;
}

function detectloopAndDelete(head){
    // detect cycle using floyd algo
    let intersection = detectThroughFloydAlgo(head);

    if(!intersection) return 'loop not found';

    // find starting point of loop
    let loopStartingNode = startingOfLoop(head, intersection)

    if(!loopStartingNode) return 'loop starting node not found';

    // remove cycle
    while(intersection.next != null){
        if(intersection.next == loopStartingNode) {
            intersection.next = null;
        }else{
            intersection = intersection.next;
        }   
    }

    console.log('remove cycle', JSON.stringify(head));
    return head;
}

console.log('detectloop and delete loop', detectloopAndDelete(head));
//console.log('detectThroughFloydAlgo', detectThroughFloydAlgo(head));

function removeLoop(head){
    let fast = head.next.next;
    let slow = head.next;
    let prev = slow;
    while(fast.next!= null && slow.next != null ){
        if(fast == slow){
            fast.next.next = null;
            console.log('break loop');
            return head;
        }
        prev = slow;
        fast = fast.next.next;
        slow = slow.next;
        
    }
    return false;
}
console.log('removeLoop', removeLoop(head))

function detectThroughHashMap(head){
    let hashMap = new Set();
    while(head){
        if(hashMap.has(head)) return true
        hashMap.add(head);
        head = head.next;
    }
    return false;
}
//console.log('detectThroughHashMap', detectThroughHashMap(head))

