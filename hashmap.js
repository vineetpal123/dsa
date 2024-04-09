/**
 * https://www.squash.io/javascript-hashmap-a-complete-guide/
 */

// Create a new HashMap
const hashMap = new Map();

hashMap.set('name', 'John Doe');
hashMap.set('age', 30);
hashMap.set('city', 'New York');

const name = hashMap.get('name');
console.log(name); // Output: John Doe

const hasAge = hashMap.has('age');
console.log(hasAge); // Output: true

hashMap.set('age', 31);
console.log(hashMap.get('age')); // Output: 31

