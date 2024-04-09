/**
 * Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
 */
console.log('subsets are', JSON.stringify(subsets([1,2,3])))

function subsets(arr){
    let output = [];
    let start = 0;
    let ans = [];
    solve(arr, start, ans, output);
    return output;
}

function solve(arr, start, [...ans], output){
    if(start >= arr.length ){
        output.push(ans)
        return;
    }
    
    // exclude
    solve(arr, start+1, ans, output);

    // include
    ans.push(arr[start]);
    solve(arr, start +1, ans, output)
}
