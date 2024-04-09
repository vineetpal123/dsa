/**
 * Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
 */

let heights = [2, 1, 5, 6, 2, 3];
heights = [2,4];

function largestRectangleArea(arr) {
    let area = 0;
    let temp = 0;
    let checkUniqe = new Set(arr);
    if(checkUniqe.size == 1) return arr.length * arr[0];
    let rightIndex = nextSmallerElementIndex(arr);
    let leftIndex = prevSmallerElementIndex(arr);

    for (let i = 0; i < heights.length; i++) {
        let current = heights[i];
        if(rightIndex[i] == -1) rightIndex[i] = heights.length;
        let width = (rightIndex[i] - leftIndex[i] - 1);
        temp = width * current;
        if (temp > area) {
            area = temp;
        }
    }
    return area;
}

function nextSmallerElementIndex(arr) {
    let n = arr.length;
    let stack = [-1];
    let ans = new Array(n);

    // iterate from end
    for (let i = n - 1; i >= 0; i--) {
        let curr = arr[i];

        // compare current with stack top
        let top = stack[stack.length - 1];
        if (top == -1) {
            ans[i] = top;
            stack.push(i);
        } else if (curr > arr[top]) {
            ans[i] = top;
            stack.push(i);
        }
        else {
            let lesserFound = false;

            while (stack.length && !lesserFound) {
                stack.pop();
                top = stack[stack.length - 1];
                if (top == -1) {
                    ans[i] = top;
                    stack.push(i);
                    lesserFound = true;
                } else if (curr > arr[top]) {
                    ans[i] = top;
                    stack.push(i);
                    lesserFound = true;
                }
            }
        }
    }
    return ans;
}

function prevSmallerElementIndex(arr) {
    let n = arr.length;
    let stack = [-1];
    let ans = new Array(n);

    // iterate from end
    for (let i = 0; i < n; i++) {
        let curr = arr[i];

        // compare current with stack top
        let top = stack[stack.length - 1];
        if (top == -1) {
            ans[i] = top;
            stack.push(i);
        } else if (curr > arr[top]) {
            ans[i] = top;
            stack.push(i);
        } else {
            let lesserFound = false;

            while (stack.length && !lesserFound) {
                stack.pop();
                top = stack[stack.length - 1];
                if (top == -1) {
                    ans[i] = top;
                    stack.push(i);
                    lesserFound = true;
                } else if (curr > arr[top]) {
                    ans[i] = top;
                    stack.push(i);
                    lesserFound = true;
                }
            }
        }
    }
    return ans;
}

console.log('largestRectangleArea--', largestRectangleArea(heights));