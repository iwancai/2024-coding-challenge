// WPU Coding Challenge 2024

// 16/366

// https://www.codewars.com/kata/563e320cee5dddcf77000158/

// function getAverage(marks){
//     let total = 0
//     for(i = 0; i < marks.length; i++){
//         total += marks[i]
//     }
//     return Math.floor(total / marks.length)
//   //TODO : calculate the downward rounded average of the marks array
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length)

console.log(getAverage([1,2,3,4,5,]));
console.log(getAverage([1,1,1,1,1,1,1,2]));