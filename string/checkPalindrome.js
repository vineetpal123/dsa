/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

console.log('isPalindrome--',checkPalindrome('A man, a plan, a canal: Panama'))

function checkPalindrome(name){
   
    let temp = '';
    for(let i = 0; i < name.length; i++){
        if(valid(name[i])) {
            temp += name[i].toLowerCase()
        }
    }

    let start = 0;
    let end = temp.length -1;
    

    while(start < end){

        let startChar = temp[start]
        let endChar = temp[end] 
        if(startChar!= endChar) return false;
        start++;
        end--
        
    }
    return true
}

function valid(ch){
    if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')) {
        return true
    } 
    return false
}
