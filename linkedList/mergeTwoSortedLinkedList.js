/**
 * Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.
* it has two variation in 
* first variation remaing element also reversed while in second remaining element were not reversed.
 */

let input = {
    "head": {
        "val": 10,
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
let input2 = {
    "head": {
        "val": 5,
        "next": {
            "val": 25,
            "next": {
                "val": 35,
                "next": {
                    "val": 70,
                    "next": {
                        "val": 90,
                        "next": null
                    }
                }
            }
        }
    },
    "size": 4
}

let res = merge2sortedLinkedList(input.head, input2.head);

console.log('middle element', JSON.stringify(res));

function merge2sortedLinkedList(head1, head2) {
    //if (!head || head.next == null) return head

    let temp1 = head1;
    let temp2 = head2;

    if(head1.val > head2.val){
        temp1 = head2;
        temp2 = head1
    }

    
    let prev = null;
    let next = null;

    
    while (temp1 != null && temp1.next !=null) {
        next = temp1.next;
        if(temp1 && temp2 && temp2.val >= temp1.val && temp2.val <= next.val){
            let t = temp2.next;
            temp2.next = next
            temp1.next = temp2;
            temp1.next.next = next;
            temp2 = t;
            temp1 = temp1.next;
        }else{
            temp1 = temp1.next;
        }
    }
    if(temp2) temp1.next = temp2;
    
    return head1;
}


