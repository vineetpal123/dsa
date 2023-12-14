let input = {
    "head": {
      "val": 20,
      "next": {
        "val": 30,
        "next": {
            "val": 40,
            "next": null
          }
      }
    },
    "size": 3
  }

function recursive(head, current, prev){
    forward = current.next ;
    current.next = prev;
    prev = current
    if(forward == null){
        head = prev;
        return head;
    }
    return recursive(head, forward, prev)
}  
//let op1 = recursive(input.head, input.head, null)
//console.log('op', JSON.stringify(op1))

function reverseList(input){
    let first = input.head;
    let second = first.next
    while(second){
        let temp = second.next
        second.next = first
        first = second
        second = temp
    }

    input.head.next = null
    input.head = first
    return input
} 

let op = reverseList(input)
console.log('op', JSON.stringify(op))

1 -> 2 -> 3
 
 

