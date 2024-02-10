// WPU Coding Challenge 2024

// 12/366

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/


// function arrayPlusArray(arr1, arr2) {
//     let total = 0

//     for(i = 0; i < arr1.length; i++) {
//         total += arr1[i]
//     }

//     for(i = 0; i < arr2.length; i++) {
//         total += arr2[i]
//     }

//   return total; //something went wrong
// }

function arrayPlusArray(arr1, arr2) {
    let total = 0

    for(i = 0; i < arguments.length; i++) {
        for(j = 0; j < arguments[i].length; j++) {
            total += arguments[i][j]
        }
    }


  return total; //something went wrong
}

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]))