
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
input = {
  "head": {
    "val": 20,
    "next": {
      "val": 30,
      "next": {
          "val": 40,
          "next": {
              "val": 50,
              "next": null
            }
        }
    }
  },
  "size": 3
}  
input = {
  "head": {
    "val": 20,
    "next": {
      "val": 30,
      "next": null
    }
  },
  "size": 3
} 

function traverse(head) {
  let current = head;
  let a = current;
  let b = current;


  while (a) {

    if (!a.next) return b;

    if (a.next && !a.next.next) {
      a = a.next
      b = b.next
      return b;
    }
    if (a.next && a.next.next) {
      b = b.next
      a = a.next.next
    }
  }

}
let middle = traverse(input.head)
console.log('middle', JSON.stringify(middle))