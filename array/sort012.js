// Known as dutch flag problem
let arr = [1,1,1, 2, 1, 0, 2, 1, 0, 0,1,1]

// [0,0,0,0,1,1,2,2]
// [0, 0, 0, 0, 1, 1, 2, 2]

// l = 4
// m = 4
// r = 5

function main(arr) {
    let l = 0 // it will store 0 , L0 ------Ln-1
    let m = 0 // it will store 1 , mn -----------mn-1
    let r = arr.length - 1 // it will store 2 mn ----- rn-1

    while (m <= r) {
        if (arr[l] === 0) {
            l++;
            m++;
        } else if (arr[m] === 2 && m <= r) {
            let temp = arr[m]
            arr[m] = arr[r]
            arr[r] = temp

            r--
        } else if (arr[m] === 0) {
            let temp = arr[m]
            arr[m] = arr[l]
            arr[l] = temp

            l++
            m++
        }
        else if (arr[m] == 1) {
            m++;
        }
    }
    console.log('arr', arr)
}
main(arr)