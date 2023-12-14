let name = 'vineet'
name[2] = 't'
console.log('name', name[2])
return;

let arr = [1,2,3,4,5,6,7]
let k = 3
let n = arr.length

for(let i = 0; i < n; i++ ){
    let pos = (i+k) % n
    arr[pos+n] = arr[i]
}
for(let i = 0; i < n; i++ ){
    arr.shift()
}
console.log('arr', arr) 



