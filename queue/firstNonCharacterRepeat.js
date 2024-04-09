/**
 * Given an input stream A of n characters consisting only of lower case alphabets. While reading characters from the stream, you have to tell which character has appeared only once in the stream upto that point. If there are many characters that have appeared only once, you have to tell which one of them was the first one to appear. If there is no such character then append '#' to the answer.

NOTE:
1. You need to find the answer for every i (0 <= i < n)
2. In order to find the solution for every i you need to consider the string from starting position till ith position.
 */

function findNonRepeat(str){
    //Take queue to find first non-repeating element.
    let queue = [];

    //Take map to check the uniqueness of an element.
    let map = new Map();
   
    let ans = '';

    for(let i = 0; i < str.length; i++){
        queue.push(str[i]);
        map.set(str[i], (map.get(str[i]) || 0) +1 );

        //If count of front element of the queue > 1 anytime then pop it from the queue until we get unique element at the front.
        while(queue.length && map.get(queue[0]) > 1){
            queue.shift();
        }

         //If queue is empty anytime append answer string with ‘#’ else append it with front element of queue.
        if(!queue.length){
           
            ans+= '#'
        }else{
            ans += queue[0];
        }
    }
    return ans;
}

console.log('non character repeat : ', findNonRepeat('geeksforgeeksandgeeksquizfor'));