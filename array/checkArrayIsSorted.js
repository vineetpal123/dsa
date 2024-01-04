function check(nums) {
    let cnt = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] > nums[i]) cnt++
    }

    if(nums[nums.length-1] > nums[0]) cnt++;
    return cnt <= 1;
};

console.log('array is sorted', check([4,1,2,3]))