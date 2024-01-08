/**
 * Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.
 */
 let input = {
    "head": {
        "val": "n",
        "next": {
            "val": "i",
            "next": {
                "val": "t",
                "next": {
                    "val": "i",
                    "next": {
                        "val": "n",
                        "next": null
                    }
                }
            }
        }
    },
    "size": 4
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


function reverse(head){
    let prev = null;
    let current = head;
    
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;   
    }
    return prev;
}

function listIsPalindrome(head){
    let mid = findMiddleElement(head);
    let secondHalf = reverse(mid);
    mid.next = null;
    while(secondHalf != null){
        if(secondHalf.val != head.val) return false;
        secondHalf = secondHalf.next;
        head = head.next;
    }
    return true
}

console.log('listIsPalindrome', listIsPalindrome(input.head))

