/**
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
* it has two variation in 
* first variation remaing element also reversed while in second remaining element were not reversed.
 */

let input = {
    "head": {
        "val": 20,
        "next": {
            "val": 30,
            "next": {
                "val": 40,
                "next": {
                    "val": 50,
                    "next": {
                        "val": 60,
                        "next": null
                    }
                }
            }
        }
    },
    "size": 4
  }

let res = reverseByKthGroup(input.head, 3);

console.log('middle element', res);
  
function reverseByKthGroup(head, k){
    if(!head || head.next == null) return head
    let current = head;
    let prev = null;
    let next = null;

    let i = 0;
    while(current != null && i < k){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i++;
    }

    // reverse element if less than kth element found;
    if(i < k){
        //prev = {60, 50}
        let tempHead = prev;
        let tempNext = null;
        let tempCurrent = tempHead;
        let tempPrev = null;
        while(tempCurrent){
            tempNext = tempCurrent.next;
            tempCurrent.next = tempPrev;
            tempPrev = tempCurrent;
            tempCurrent = tempNext;
        }   
        current = tempCurrent;
        prev = tempPrev;
        head = tempHead;
    }

    head.next = reverseByKthGroup(current, k);
    return prev;
}


