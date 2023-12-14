let input = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]


let res = spiral(input)
console.log('res : ', res)
function spiral(arr) {
    let rows = arr.length;
    let column = arr[0].length
    let newArr = []
    let count = 0;
    let total = rows * column;

    while (count < total) {

        // top row

        for (let c = 0; c < arr[0].length; c++) {
            console.log(arr[0][c])
            newArr.push(arr[0][c])
            count++;
        }
        arr.shift()

        // right row
        for (let r = 0; r < arr.length; r++) {
            let c = arr[r].length - 1
            console.log(arr[r][c])
            newArr.push(arr[r][c])
            arr[r].pop()
            count++;

        }

        // bottom row
        if (count != total) {

            for (let c = arr[arr.length - 1].length - 1; c >= 0; c--) {
                console.log(arr[arr.length - 1][c])
                newArr.push(arr[arr.length - 1][c])
                count++;
            }
            arr.pop()

        }

        if (count != total) {
            // left row
            for (let r = arr.length - 1; r >= 0; r--) {
                console.log(arr[r][0])
                newArr.push(arr[r][0])
                arr[r].shift()
                count++;
            }

        }
    }

    return newArr
}
