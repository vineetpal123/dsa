let input = "nitin"
let left = 0
let right = input.length - 1
console.log(`${input} is palindrome : ${checkPalindrome(input, left, right)}`)

function checkPalindrome(name, l , r){
    if(!name.length) return false
    if(name.charAt(l) != name.charAt(r)) return false 
    if(l >= r) return true
    return checkPalindrome(name, l+1, r-1)
}
