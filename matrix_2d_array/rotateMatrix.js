//rotate matrix by 90 degree

let input = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]

// bruteforce : we will create a new matrix and set value of old matric in to new one place

//let res = rotateMatrixBruteForce(input)
//console.log('res : ', res)
function rotateMatrixBruteForce(input) {
  let n = input.length
  let total = n * n;
  let count = 1;

  let matrix = []
  for (let i = 0; i < n; i++) {
    let temp = [...Array(n)]
    matrix.push(temp)
  }

  while (count <= total) {

    let init = n - 1
    for (let row = 0; row < input.length; row++) {

      for (let col = 0; col < input[row].length; col++) {
        let key = init + col * n
        matrix[parseInt(key / n)][key % n] = input[row][col]
        count++;
      }
      init--;
    }
  }

  return matrix
}


let res1 = rotateMatrixBestApproch(input)
console.log('res1 : ', res1)

// rotateMatrixBestApproch: we are using given matrix only, not creating additional matrix
//1) we will do transpose : transpose means place rows in place of columns and vice versa
//2) After transpose reverese each row  

// 1 2 3  
// 4 5 6  
// 7 8 9
// After tranpose 
// 1 4 7
// 2 5 8
// 3 6 9
// After reverse each row
// 7 4 1 
// 8 5 2 
// 9 6 3



console.log('input', input)

function rotateMatrixBestApproch(arr){
  let row = arr.length -1;
  let col = arr[0].length -1
  for(let r=0; r <= row; r++ ){
    for(let c = r; c <= col; c++){
      let temp = arr[r][c] 
      arr[r][c] = arr[c][r] 
      arr[c][r] = temp;
    }
  }
  for(let r=0; r <= row; r++ ){
    reverseArr(arr[r], 0, arr[r].length-1)
  }
}
function reverseArr(arr, start, end){
  while (start < end){
    let temp = arr[start];
    arr[start] = arr[end]
    arr[end] = temp; 
    start++;
    end--;
  }
}
console.log('input', input)