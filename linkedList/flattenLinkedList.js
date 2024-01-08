class Node {
    constructor(x) {
      this.val = x;
      this.next = null;
      this.down = null;
    }
}

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

function merge(head1, head2){
    let l3 = new Node(0);
    let temp3 = l3;
    let temp1 = head1;
    let temp2 = head2;
    while(temp1 != null && temp2 != null){
        if(temp1.val < temp2.val){
            temp3.next = new Node(temp1.val);
            temp3 = temp3.next;
            temp1 = temp1.next;
        } else if(temp1.val > temp2.val) {
            temp3.next = new Node(temp2.val);
            temp3 = temp3.next;
            temp2 = temp2.next;
        } else{
            temp3.next = new Node(temp1.val);
            temp3 = temp3.next;
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
    }

    while(temp1 != null){
        temp3.next = new Node(temp1.val);
        temp3 = temp3.next;
        temp1 = temp1.next;
    }
    while(temp2 != null){
        temp3.next = new Node(temp2.val);
        temp3 = temp3.next;
        temp2 = temp2.next;
    }
    l3 = l3.next;
    return l3;
}


const head = new Node(3);
head.next = new Node(10);
head.next.next = new Node(7);
head.next.next.next = new Node(14);
head.down = new Node(9);
head.down.down = new Node(17);
head.next.down = new Node(47);
head.next.next.down = new Node(15);
head.next.next.down.down = new Node(30);
head.next.next.next.down = new Node(22);

function flattenList(head){

    if(head == null) return head;

    let downList = head;
    let tDownList = downList;
    let tempDownList = head;
    let rightNode = head.next;
   
    while(tempDownList.down){
        tDownList.down = tempDownList.down;
        tDownList = tDownList.down;
        tempDownList = tempDownList.down;
    }
    downList.next = null;
    downList = convertDownIntoNext(downList);

    let rightList = flattenList(rightNode);
    return merge(downList, rightList);
}

function convertDownIntoNext(head){
    let temp = head;
    while(temp){
        temp.next = temp.down;
        delete temp.down;
        temp = temp.next;
    }
    console.log('donwlist converted')
    return head;
}
console.log('flattenList', flattenList(head));