let str = "vineet";

let stack = [];
let i = 0
while(i < str.length){
    stack.push(str[i]);
    i++;
}

str = '';

while(stack.length){
    str += stack.pop();
}
console.log('reverse string', str);