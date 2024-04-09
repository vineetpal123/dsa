/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * In other words, return true if one of s1's permutations is the substring of s2.
 * Approache : create window of sub string size, create 
 * create substring of same window size , compared with substring using ASCII
 * create map of char from both string, 
 * increase in case of string1  decrese counter in case of string 2
 * end result count is 0 for all element.
 */

console.log('permutation exist', permutation('ab','eidbaooo'))

function permutation(s1, s2){
   
    let windowSize = s1.length;
    let start = 0;
    if (s1.length > s2.length) return false;
   
    while(s2.length-1 >= start){
        let sub = '';
        for(let i = start; i < start + windowSize; i++){
            sub += s2[i];
        }  
        
        let isEqual = checkEqual(s1, sub);
        if (isEqual) return true
        start++;    
    }
    return false
}

function checkEqual(sub1, sub2){
    // this commented code is also working
    // let obj = {}
    // for (let i = 0; i < sub1.length; i++) {
    //     obj[sub1.charCodeAt(i)-97] = (obj[sub1.charCodeAt(i)-97] || 0) +1;
    //     obj[sub2.charCodeAt(i)-97] = (obj[sub2.charCodeAt(i)-97] || 0) -1;
    // }
    // if (!Object.values(obj).some(e => e !== 0)) return true;

    let map = new Map();
    for (let i = 0; i < sub1.length; i++) {
        map.set(sub1.charCodeAt(i)-97, (map.get(sub1.charCodeAt(i)-97) || 0) +1);
        map.set(sub2.charCodeAt(i)-97, (map.get(sub2.charCodeAt(i)-97) || 0) -1);
    }
    if(![...map.values()].some(e => e !== 0)) return true;
    return false;
}
