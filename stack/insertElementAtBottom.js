let stack = [1,2,3,4,5];

function insertAtBottom(stack, element){
    
    
    if(stack.length == 0) {
        stack.push(element)
        return;
    }
    let peek = stack.pop();
    insertAtBottom(stack, element);
    stack.push(peek);   
    return stack;

}

console.log('after insertion', insertAtBottom(stack, 6));