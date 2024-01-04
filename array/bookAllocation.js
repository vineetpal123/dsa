let books = [10, 20, 30, 60]
let student = 2;

function main (books, student){
    let start = 0;
    let end = 0;
    for (let i = 0; i < books.length; i++) {
        end += books[i];
    }
    let mid = Math.floor(start + (end -start)/2);
    let ans = -1;
    while( start < end) {
        let isPossible = checkIfPossible(books, student, mid);
        if(!isPossible) {
            start = mid + 1;
        } else {
            ans = mid;
            end = mid -1
        }
        mid = Math.floor(start + (end -start)/2);
    }
    return ans;
}

console.log('book allocation', main(books, student));

function checkIfPossible(books, student, value){
    
    let studentCnt = 1;
    let allocation = 0;
    
    for(let i = 0; i < books.length; i++){
        
        if (allocation + books[i] <= value) {
            allocation = allocation + books[i];
        }else{
            studentCnt++;
            if (studentCnt > student || books[i] > value ) {
                return false
            }
            allocation = books[i];
        }
    }
    return true
}
