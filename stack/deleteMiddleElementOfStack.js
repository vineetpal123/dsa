let stack = [1,2,3,4];
let mid = Math.floor(stack.length/2);

function deleteMiddleELement(stack, mid){

    let topElement = stack.pop();
    if(stack.length === mid) return;

    
    deleteMiddleELement(stack, mid);
    stack.push(topElement);

    return stack;
}

console.log('stack after deleted middle element', deleteMiddleELement(stack, mid));