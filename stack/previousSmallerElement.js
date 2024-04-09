/**
 * The outer loop picks all the elements one by one. The inner loop looks for the first smaller element for the element picked by outer loop. If a smaller element is found then that element is printed as next, otherwise, -1 is printed.
 */

let arr = [1, 3, 0, 2, 5];

function getPreviousSmallerElement(arr){
    let n = arr.length;
    let stack = [-1];
    let ans = new Array(n);

    // iterate from end
    for(let i = 0; i < n; i++){
        let curr = arr[i];

        // compare current with stack top
        let top = stack[stack.length -1];
        if(curr >= top){
            ans[i] = top;
            stack.push(curr);
        }else{
            let lesserFound = false;
            
            while(stack.length && !lesserFound){
                stack.pop();
                if(curr >= stack[stack.length -1]){
                    ans[i] = stack[stack.length -1];
                    stack.push(curr);
                    lesserFound = true;
                }
            }
        }
    }
    return ans;
}
console.log('get previous smaller element', getPreviousSmallerElement(arr));