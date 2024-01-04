/**
 * Remove occurencr of sub string.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

console.log('after occurencr removed',occurenceRemoved('daabcab', 'abc'))

function occurenceRemoved(s, part){
   
    while(s.indexOf(part) != -1){
        s = s.replace(part, '')    
    }
    return s
}
