/**
 * Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
 */
console.log('subsets are', JSON.stringify(subsets([1,2,3])))

function subsets(nums){
    let ans = [];
    let output = [];
    let index = 0;
    solve(nums, output, index, ans);
    return ans;
}

function solve(nums, [...output], index, ans){
    if(index >= nums.length){
        ans.push(output);
        return;
    }

    // exclude
    solve(nums, output, index+1, ans);

    // include 
    let element = nums[index];
    output.push(element);
    solve(nums, output, index+1, ans)
}
