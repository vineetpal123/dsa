let userList= [
    { FistName: "John", lname: "Doe", age: 25},
    { FistName: "Tom", lname: "Cruise", age: 28},
    { FistName: "jenifer", lname: "candy", age: 26},
    { FistName: "bob", lname: "alice", age: 28}
]

function groupUser(userList){
    let result = {}
    userList.forEach(obj => {
        if(!result[obj.age]){
            result[obj.age] = [obj]; 
        }else{
            result[obj.age].push(obj); 
        }
         
    });
    console.log('result', result)
    return result;
}
console.log('groupUser', groupUser(userList));
/*{
    25: [ { FistName: "John", lname: "Doe", age: 25}],
    28: [{ FistName: "Tom", lname: "Cruise", age: 28},{ FistName: "bob", lname: "alice", age: 28}],
    26: [{ FistName: "jenifer", lname: "candy", age: 26}]
  }
  */