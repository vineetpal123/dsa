// reverse each word , 

let string = "My name is vineet"

reverseString(string)
function reverseString(string){
    let l = string.split(' ');
    let temp = '';
    for(let i = 0; i < l.length; i++){
        temp = temp.concat(` ${reverse(l[i])}`)
    }
    console.log('temp', temp)
}

function reverse(txt){
    let temp = ''
    for(let i = txt.length-1 ; i >= 0; i--){
        temp = temp.concat(txt[i])
    }
    return temp
}


