let name = "A man, a plan, a canal: Panama"

name = name.toLowerCase()
name = name.replace(/[^a-z0-9]/gi, '')
let res = isPalindrome(name)
console.log('is palindrome ------------->', res)
function isPalindrome(name) {
    let length = name.length
    let mid = length / 2
    let left = '';
    let right = '';
    let j = length - 1
    for (let i = 0; i < mid; i++) {
        left = left.concat(name[i])
        right = right.concat(name[j])
        j--
    }
    if (left === right) {
        return true
    }
    return false
}


