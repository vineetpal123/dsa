

/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array
 * @param {number[]} nums
 * @return {number}
 */

let nums =  [3,0,1];

var missingNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 1){
            nums[i] = nums.length +1;
        }
    }
     for(let i = 0; i < nums.length; i++){
        let elem = Math.abs(nums[i]);
        if(nums[elem-1]){
            if(nums[elem-1] > 0) {
                nums[elem-1] =  - nums[elem-1]
            };
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) return i+1;
    }
    
    return 0;
};

console.log('missign number', missingNumber(nums))