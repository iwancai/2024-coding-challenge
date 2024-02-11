function solution(year) {
    let result = year / 100
    
    if (Number.isInteger(result) === true) {
        return year / 100
    } else {
        return Math.round( year / 100 + 1)
    }
    return year
}

console.log(solution(3310))