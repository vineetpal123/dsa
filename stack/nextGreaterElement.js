/**
 * The outer loop picks all the elements one by one. The inner loop looks for the first greater element for the element picked by outer loop. If a smaller element is found then that element is printed as next, otherwise, -1 is printed.
 */

let arr = [4, 5, 2, 25];

function nextGreaterElement(arr){
    let n = arr.length;
    let stack = [-1];
    let ans = new Array(n);

    // iterate from end
    for(let i = n-1; i >= 0; i--){
        let curr = arr[i];

        // compare current with stack top
        let top = stack[stack.length -1];
        if(curr < top){
            ans[i] = top;
            stack.push(curr);
        }else{
            let greaterFound = false;
            
            while(stack.length && !greaterFound){
                stack.pop();
                if(curr <= stack[stack.length -1]){
                    ans[i] = stack[stack.length -1];
                    stack.push(curr);
                    greaterFound = true;
                }
            }

            if(!greaterFound && !stack.length){
                ans[i] = -1;
                stack.push(curr);
            }
        }
    }
    return ans;
}
console.log('next greater element', nextGreaterElement(arr));