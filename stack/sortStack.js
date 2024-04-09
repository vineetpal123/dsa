let stack = [5, -2, 9, -7, 3];

function sort(stack){
    if(!stack.length) return [];
    let peek = stack.pop();
    stack = sort(stack);
    insertSortedElement(stack, peek);
    return stack;
}

function insertSortedElement(stack, element) {

    if (!stack.length) {
        stack.push(element);
        return stack;
    }

    let top = stack.pop();
    if (element < top) {
        insertSortedElement(stack, element);
    } else {
        stack.push(top);
        stack.push(element);
        return;
    }
    stack.push(top);
    return stack;
}

console.log('sort stack', sort(stack));