/*
let postObj = [{
    id: 1,
    title: 'first post'
},{
    id: 2,
    title: 'second post'
}];

function addPost(post, cb){
    setTimeout(function(){
        postObj.push(post);
        cb()
    }, 1000)
   
}

function addByCallBack(post){
    addPost(post, function(){
        console.log('post added successfully', postObj);
    });
}
addByCallBack({id: 3, title: 'third object'})
addByCallBack({id: 4, title: 'foruth object'})

function addPostByPromise(post){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            postObj.push(post);
            resolve()
        }, 1000)
    } )
}
addPostByPromise({id: 5, title: 'fifth object'}).then(() => { console.log('success fully added', postObj)});
*/

function callback_BasedFunction(arg1, arg2, callback) {
    // Perform asynchronous operations
    // Call the callback with the result or error
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        callback(null, result);
      } else {
        callback(new Error('Result is not odd!'), null);
      }
    }, 1000);
  }

function promise_BasedFunction(arg1, arg2){
    return new Promise((resolve , reject) => {
        callback_BasedFunction(arg1, arg2, (err, res) => {
            if(err) reject(err);
            resolve(res);
        })
    })
}
  
function print(err, res){
    console.log('err', err);
    console.log('res', res);
}  
//callback_BasedFunction(2,2, print);  
promise_BasedFunction(2,1).then((res) => {
    console.log('res', res);
}).catch((err) => {
    console.log('err', err);
})