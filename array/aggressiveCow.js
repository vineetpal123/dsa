let stall = [4, 2, 1, 3, 6]
let cow = 2;

// placed cows in stall with longest distance 

function main (stall, cow){
    let start = 0;
    let end = stall.length;
   
    let mid = Math.floor(start + (end -start)/2);
    let ans = -1;
    while( start < end) {
        let isPossible = checkIfPossible(stall, cow, mid);
        if(!isPossible) {
            end = mid - 1;
        } else {
            ans = mid;
            start = mid + 1
        }
        mid = Math.floor(start + (end -start)/2);
    }
    return ans;
}

console.log('cow longest location', main(stall, cow));

function checkIfPossible(stall, cow, mid){
    
    let distance = 0;
    
    for(let i = 0; i < stall.length; i++){
        distance = stall[i] - mid
        if (distance >= mid) return true;
    }
    return false
}
