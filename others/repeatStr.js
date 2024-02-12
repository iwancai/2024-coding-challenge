

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/

// function repeatStr (n, s) {
//   let result = []
//   for(let i = 0; i < n; i++) {
//     result.push(s)
// }
//   return result.join('')
// }

function repeatStr (n, s) {
    return s.repeat(n)
}

console.log(repeatStr(3, "*"));
// console.log(repeatStr(5, "#"));
// console.log(repeatStr(2, "ha "));