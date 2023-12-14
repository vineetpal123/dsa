// created link list using oops
class List {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
            previous: null
        }
        this.tail = this.head
        this.size = 1
    }
    appendData(data) {
        let nodeData = {
            value: data,
            next: null,
            previous: this.head
        }
        this.tail.next = nodeData
        this.tail = nodeData;
        this.size++;
    }
    insertData(data) {
        let nodeData = {
            value: data,
            next: this.head,
            previous: null
        }
        this.head = nodeData
        this.size++;
    }
    insertAtPosition(data, position) {
        if(position == 1){
            this.insertData(data)
            return
        }
        let i = 1;
        let temp = this.head 
        while (i < position-1) {
            temp = temp.next
            i++;
        }
        let nodeData = {
            value: data,
            next: temp.next,
            previous: temp
        }
        temp.next = nodeData
        if(nodeData.next == null){
            this.tail =nodeData
        }
        this.size++;
    }
    deleteAtPosition(position) {
        let temp = this.head 
        if(position == 1){
            let nodeData = {
                value: temp.next.value,
                next: temp.next.next,
                previous:temp.next.previous
            }
            this.head.value = nodeData.value
            this.head.next = nodeData.next
            this.size--;
            return
        }
        let i = 1;
        
        while (i < position-1) {
            temp = temp.next
            i++;
        }
        if(temp.next.next == null){
            this.tail =temp
        }
        temp.next = temp.next.next
        this.size--;
    }
}

let list = new List(20)
list.appendData(30)
list.appendData(40)
list.appendData(50)
list.insertData(10)
list.insertData(5)
list.insertAtPosition(15, 3)
list.insertAtPosition(2, 1)
list.insertAtPosition(200, 9)
list.deleteAtPosition(5)
// list.deleteAtPosition(8)
// list.deleteAtPosition(1)

function traverseList(list) {
    let temp = list.head
    while (temp) {
        console.log('value', temp.value)
        temp = temp.next
    }
}
function updateList(list, pos, data) {
    let i = 1;
    let temp = list.head
    while (i <= pos) {
        if (i === pos) {
            temp.value = data
        }
        temp = temp.next
        i++;
    }
}
console.log('lsit', list)
updateList(list, 3, 100)
traverseList(list)
