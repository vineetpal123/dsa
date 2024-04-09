let stack = [1,2,3];

function reverseThroughRecursion(stack){

    if(stack.length == 0) {
        return [];
    }

    let peek = stack.pop();

    stack = reverseThroughRecursion(stack);
    insertAtBottom(stack, peek)
    return stack;

}

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

console.log('stack', reverseThroughRecursion(stack));