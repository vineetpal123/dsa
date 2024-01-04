let input = 10;
let prime = [];
let cnt = 0;
for (let i = 1; i < input; i++) {
    prime.push(true)
}
prime[0] = false;
prime[1] = false;

for(let i = 2; i < prime.length; i++){
    let num = i + 1;
    if(prime[i]){
        cnt++;
        for(let j = i; j < input; j = j+1){
            let val = i * j;
            if(val < input){
                prime[val - 1] = 0
            }
            
        }
    }
}


console.log('prime', prime)