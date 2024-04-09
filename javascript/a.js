/*
How can I schedule a series of calendar events in Node.js to execute after specific intervals of time? For instance:
Display a list of movies, then execute after a 5-second delay.
Schedule a coffee break reminder to execute after a 6-second delay.
Set up a grocery shopping reminder to execute after a 7-second delay.
Schedule a car wash reminder to execute after an 8-second delay.
Schedule - means just console.log the task name

*/

function scheduler(event, time){

    return new Promise((resolve, reject) => {
        setTimeout((event) => {
            console.log('event : ', event);
            resolve('success');
        }, time)
    })
}


let a = scheduler('movies', 1000).then( () => {
    console.log('complsest');
});
console.log('a', a);