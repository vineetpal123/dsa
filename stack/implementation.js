class Stack {
    constructor() {
        this.items = []
    }
    push(data) {
        this.items.push(data)
        return this.items
    }
    pop() {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    peek() {
        if (this.items.length == 0)
            return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length == 0;
    }
    
    printStack(){
        //This method returns a string in which all the element of an stack is concatenated
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}


let test = new Stack()
console.log('test', test.push(2))