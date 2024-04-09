/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
 */


/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length <=1) return false;
    let map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    let i = 0;
    let stack = [];
    while(i < s.length){
        if(map[s[i]]) {
            stack.push(s[i]);
        }else{
            let peek = stack[stack.length -1];
            if(!peek) return false
            if(map[peek] == s[i]){
                stack.pop();
            }else{
                return false;
            }
        }
        i++;
    }
    if(stack.length){
        return false
    } else{
         return true;
    }
};

console.log('isvalid---', isValid("()[]{}"));