/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] || 0) +1;
        obj[t[i]] = (obj[t[i]] || 0) -1;
    }
    if (!Object.values(obj).some(e => e !== 0)) return true;
    return false;
};

console.log('isAnagram', isAnagram('anagram', 'nagaram'));