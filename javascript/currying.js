// infinite currying

function sum(a){
    return function(b){
      if(b) return sum(a+b)
      return a;
    }
  }
console.log('sum', sum(2)(4)(3)(7)())

