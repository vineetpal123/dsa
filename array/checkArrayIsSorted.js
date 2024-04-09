
function check(nums) {
    let cnt = 0;

    for(let i = 1; i < nums.length; i++){
        // check every previous element is greater than current
        if(nums[i-1] > nums[i]) cnt++
    }

    // if last element is greater than first
    if(nums[nums.length-1] > nums[0]) cnt++;
    return cnt <= 1;
};

console.log('array is sorted', check([4,1,2,3]))