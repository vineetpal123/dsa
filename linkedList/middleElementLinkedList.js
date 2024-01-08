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

console.log('middle element', findMid(input.head));  
function findMid(head){
  let begineer = head;
  let pro = head;

  while(pro && pro.next){
      begineer = begineer.next;
      pro = pro.next.next || null;
  }
  return begineer.val;
}

//console.log('middle element', findMidByBruteForce(input.head));

function findMidByBruteForce(head){
  let temp = head;
  let length = 0;
  while(temp){
      temp = temp.next;
      length++;
  }
  let mid = Math.floor(length/2) + 1;

  let temp1 = head;
  let position = 0;
  let elem = '';
  while(position < mid){
      elem = temp1.val;
      temp1 = temp1.next;
      position++;
  }
  console.log('mid ',mid);
  console.log('elem ', elem);
}
