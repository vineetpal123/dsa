/**
 * lexical scoping : inner function has access to its parent scope 
 */
// this is call lexical scoping
function outer() {
    let name = 'vineet';

    function inner() {
        console.log('lexical scoping name', name)
    }
    inner()
}
outer();

// in closure outer function return innrer function

function outer1() {
    let counter = 1;

    function inner() {
        counter++;
        return counter;
    }
    return inner;
}
let counter = outer1();
console.log(' increase counter', counter());
console.log('increase counter', counter());
console.log('increase counter', counter());

let newCounter = outer1();
console.log('new increase counter', newCounter());
console.log('new increase counter', newCounter());
console.log('new increase counter', newCounter());

// more example 

for (var i = 1; i < 5; i++) {
    setTimeout(function () {
        console.log('i ', i);
    })
}
/* o/p : 5 ,5 ,5 ,5 
    * because we are use var it will host variable i on top globally so before closing first timeout  its value keep increase
    * we can solve this by closure
*/
for (var i = 1; i < 5; i++) {
    (function (x) {
        setTimeout(function () {
            console.log('closure i ', x);
        })
    })(i);
}
/* o/p : 1,2,3,4
    * closure function will create which will maintain variable scope
*/
