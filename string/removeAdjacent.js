/**You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique. */

function removeDuplicates(s){

    for(let i = 1; i < s.length; i++){
        if(s[i] === s[i-1]) {
            s = s.slice(0, i-1) + s.slice(i+1, s.length) 
            i -=2
        }
        
    }
    return s;
}
console.log('after duplicatre remoce', removeDuplicates('abbaca'))