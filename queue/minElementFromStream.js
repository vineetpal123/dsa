/**
 * Queue based approach for first non-repeating character in a stream
 */

function firstRepeatingCharStream(str) {
    let queue = [];
    let map = new Map();
    let ans = [];
    let i = 0;
    let front;
    while (i < str.length) {
        let char = str[i];
        if (!map.has(char)) {
            map.set(char, 1);
            queue.push(char);
            front = queue[0]
        } else {
            let frontFound = false;
            while (queue.length >= 0 && !frontFound) {
                if(map.has(front)) {
                    front = queue.shift();
                } else{
                    front = queue[0];
                    frontFound = true;
                } 
            }
            if(!frontFound || !front){
                front = -1;
            }
        }
        ans.push(front);
        i++;
    }
    return ans;
}

console.log('firstRepeatingCharStream', firstRepeatingCharStream('aabcbc'));