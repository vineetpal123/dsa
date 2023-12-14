// let input = {
//     "head": {
//       "val": 7,
//       "random": null,
//       "next": {
//         "val": 13,
//         "random": 0,
//         "next": {
//             "val": 11,
//             "random": 0,
//             "next": {
//                 "val": 10,
//                 "next": {
//                     "val": 1,
//                     "next": null
//                   }
//               }
//           }
//       }
//     },
//     "size": 3
//   }

//   [[7,null],[13,0],[11,4],[10,2],[1,0]]  

class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
      this.random = null;
    }
  }
   
  function cloneLinkedList(head) {
    if (head === null) {
      return null;
    }
   
    // Step 1: Create new nodes and insert them next to the original nodes
    let curr = head;
    while (curr !== null) {
      const newNode = new Node(curr.data);
      newNode.next = curr.next;
      curr.next = newNode;
      curr = newNode.next;
    }
   
    // Step 2: Set the random pointers of the new nodes
    curr = head;
    while (curr !== null) {
      if (curr.random !== null) {
        curr.next.random = curr.random.next;
      }
      curr = curr.next.next;
    }
   
    // Step 3: Separate the new nodes from the original nodes
    curr = head;
    const clonedHead = head.next;
    let clonedCurr = clonedHead;
    while (clonedCurr.next !== null) {
      curr.next = curr.next.next;
      clonedCurr.next = clonedCurr.next.next;
      curr = curr.next;
      clonedCurr = clonedCurr.next;
    }
    curr.next = null;
    clonedCurr.next = null;
   
    return clonedHead;
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