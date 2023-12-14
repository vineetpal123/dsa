// reverse string using 
//https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
let name = "babbar"
console.log('reverse string', reverse(name))

function reverse(name){
    if(name === '') return "";
    return reverse(name.substr(1)) + name.charAt(0)
}
/* --------------- explanation --------------- 
function reverse(babbar){
    if(name === '') return "";
    return "rabba" + "b"
}

function reverse(abbar){
    if(name === '') return "";
    return "rabb" + "a"
}
function reverse(bbar){
    if(name === '') return "";
    return "rab" + "b"
}
function reverse(bar){
    if(name === '') return "";
    return "ra" + "b"
}
function reverse(ar){
    if(name === '') return "";
    return "r" + "a"
}
function reverse(r){
    if(name === '') return "";
    return "" + "r" 
}
function reverse(""){
    if(name === '') return "";
    return reverse(r.substr(1)) + r.charAt(0)
}
/* --------------- explanation --------------- */