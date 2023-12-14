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
    }
}

function main(input, k){
    let current = input.head;    
    let i = 1;
    let temp = {}
    while(current){
        
        let first = current;
        let se
        if(i == k){
            let temp
        }
        i++;
        current = current.next
    }

}
// main (input, 2)
reverse(input.head, 3)

function reverse(head, k,){
    let first = head;
    let second = first.next;
    let i = 1
    while(second){
        
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
        i++;
        if(i == k) second = null;
        
    }
    head.next = null;
    head = first;
    return head
}