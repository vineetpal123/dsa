class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
      this.random = null;
    }
  }
     
  // Function to print the linked list
  function printList(head) {
    process.stdout.write(head.data + "(" + (head.random.data + ")"));
    head = head.next;
    while (head !== null) {
      process.stdout.write(" -> " + head.data + "(" + (head.random.data + ")"));
      head = head.next;
    }
    console.log();
  }

  function cloneLinkedList(head){
    //create clone linked list
    if (head === null) {
      return null;
    }
    let curr = head 
    
    // insert duplicate of current node after current element
    while(curr){
        let newNode = new Node(curr.data)
        newNode.next = curr.next
        curr.next = newNode
        curr = curr.next.next
    }

    curr = head 
    // set random pointer to new node
    while(curr){
        if(curr.next.random == null){
            curr.next.random = curr.random.next
        }
        curr = curr.next.next
    }
    // restore original and clone 
    curr = head 
    let cloneHead = curr.next;
    let currClone = cloneHead
    while(currClone.next){ 
       curr.next = curr.next.next
       currClone.next = currClone.next.next
       curr = curr.next
       currClone = currClone.next  
    }
    curr.next = null
    return cloneHead
  }
//   1 -> 1 -> 2 -> 2 -> 3 -> 3
   
  // Driver code
  // Creating a linked list with random pointer
  const head = new Node(1);
   head.next = new Node(2);
   head.next.next = new Node(3);
   head.next.next.next = new Node(4);
   head.next.next.next.next = new Node(5);
   head.random = head.next.next;
   head.next.random = head;
   head.next.next.random = head.next.next.next.next;
   head.next.next.next.random = head.next.next;
   head.next.next.next.next.random = head.next;
   
  // Print the original list
  console.log("The original linked list:", head);
  printList(head);
   
  // Function call
  const sol = cloneLinkedList(head);
   
  console.log("The cloned linked list:");
  printList(sol);
   
  // The code is contributed by Arushi Goel.