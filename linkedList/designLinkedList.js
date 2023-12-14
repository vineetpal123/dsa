class MyLinkedList {
    head = {
        value: null,
        next: null
    }
    tail = this.head
    size = 0
    constructor() {
        // this.head = {
        //     next: null
        // }
        // this.tail = this.head
        // this.size = 0
    }

    get(index) {
        let i = 1;
        let temp = this.head 
        while (i <= index) {
            temp = temp.next
            i++;
        }
        return temp?.value ? temp.value: -1
    }

    addAtHead(val) {
        let nodeData = {
            value: val,
            next: this.head
        }
        this.head = nodeData
        this.tail = nodeData.next
        this.size++;
    }

    addAtTail(val) {
        let i = 1;
        let temp = this.head 
        while (i < this.size) {
            temp = temp.next
            i++;
        }
        let nodeData = {
            value: val,
            next: null
        }
        temp.next = nodeData
        if(nodeData.next == null){
            this.tail =nodeData
        }
        this.size++;
    }

    addAtIndex(index, val) {

        if(!index || index > this.size) return
        if(index == 1){
            this.addAtHead(val)
            return
        }
        if(index === this.size){
            this.addAtTail(val)
            return
        }
        let i = 0;
        let temp = this.head 
        while (i < index) {
            temp = temp.next
            i++;
        }
        let nodeData = {
            value: val,
            next: temp.next
        }
        temp.next = nodeData
        this.size++;
    }

    deleteAtIndex(index) {
        if(index < this.size){
            let temp = this.head 
        if(index == 1){
            let nodeData = {
                value: temp.next.value,
                next: temp.next.next
            }
            this.head.value = nodeData.value
            this.head.next = nodeData.next
            this.size--;
            return
        }
        let i = 1;
        
        while (i < index-1) {
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
}
var obj = new MyLinkedList()
//var param_1 = obj.get(1)
  obj.addAtHead(1)
//   obj.addAtHead(2)
//   obj.addAtTail(5)
   obj.addAtTail(3)
//   obj.addAtTail(8)
   obj.addAtIndex(1,2)
   console.log('get',obj.get(1))
//   obj.deleteAtIndex(3)
//console.log('param_1', param_1)
console.log('obj', JSON.stringify(obj))