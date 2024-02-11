
function squareSum(numbers){
  return numbers.reduce((acc, curr) => Math.pow(curr, 2) + acc, 0)
}

console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))