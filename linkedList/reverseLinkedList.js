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

function reverseList(input){
  let current = input.head;
  let prev = null;
  while(current){
      let forward = current.next;
      current.next = prev;
      prev = current;
      current = forward;
  }
  return prev;
}
//console.log('reverse list', reverseList(input));

function recursive(head, current, prev){
  if(current == null) {
      return prev;
  }
  let forward = current.next;
  current.next = prev;
  prev = current;
  current = forward;
  return recursive(head, current, prev);
}

console.log('reverse list recursive', recursive(input.head, input.head, null));

