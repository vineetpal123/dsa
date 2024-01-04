let input = 37

function findSqRoot(input){
    let start = 0;
    let end = input;
    let mid = Math.floor(start + (end - start)/2);
    let ans = -1;
    while(start <= end){
        if (mid * mid === input){
            ans = mid;
            return ans;
        } else if( mid * mid > input){
            end = mid -1;
        } else {
            start = mid + 1;
            ans = mid
        }
        mid = Math.floor(start + (end - start)/2);
    }
    console.log('ans', ans); 
    return ans;
}
let sqroot = findSqRoot(input)
console.log('start', sqroot)

function findPrecision(input, sqroot, precision) {
    let factor = 1;
    let ans = sqroot
    for ( let i = 0; i <= precision; i++){
        factor = factor/10;
        for (let y = 1; y < 10; y++ ){
            let key = (factor * (i * 10));
            let z = 1;
            let d = z/key;
            let num = parseFloat(ans + d).toPrecision(3);
            num = Number(num)
            if( num * num > input) {
                continue;
            }else {
                ans = num;
            }
        }
    }
    console.log('ans', ans)
}
console.log('precision', findPrecision(input, sqroot, 3))
