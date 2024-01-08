/**
 * remove duplicate for sorted and unsorted
 * for unsorted use map or sort linked list first then remove duplicate;
 */

 let input = {
    "head": {
        "val": 20,
        "next": {
            "val": 20,
            "next": {
                "val": 30,
                "next": {
                    "val": 30,
                    "next": {
                        "val": 40,
                        "next": null
                    }
                }
            }
        }
    },
    "size": 5
  }

function removeDuplicateFromSortedList(head){
    let temp = head;
    let elem = temp.val;
    let next = '';
    while(temp.next){
        next = temp.next;
        if(elem == next.val){
            temp.next = next.next;
        }else{
            elem = next.val;
            temp = temp.next;
        }
    }
    return head;
}  
let sortedDuplicate = removeDuplicateFromSortedList(input.head);
console.log('after remove dupliacte', sortedDuplicate)

