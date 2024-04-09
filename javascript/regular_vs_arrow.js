/**
 *  

In arrow function no need to wrote return it will automatically return if u are not using {} , if u are using then u have to wrote return  

Arguments binding : Arrow functions do not have an arguments binding 

Use of this keyword : Unlike regular functions, arrow functions do not have their own this. The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function. 

Using new keyword : Regular functions created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword. 

However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword. 

No duplicate named parameters : Arrow functions can never have duplicate named parameters, whether in strict or non-strict mode. 
 */

function regular(){
    console.log('regular this ', this)
}

let arrow = () => {
    console.log('arrow this ',this)
};

function outer(){
    this.username = 'vinnet';
    let inner = () => {
        console.log('arrow this ',this)
        console.log('usrename', this.username);
    }
    inner();
}

regular();
arrow();
outer();

