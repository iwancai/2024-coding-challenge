const reverseSeq = n => {
    const result = []
    for (let i = n; i >= 1; i--){
        result.push(i)
    }
    return result;
    return Array(n)
    .fill()
    .map((el, i) => n - i)

};

// const reverseSeq = length => Array.from({length}, () => length--)


  console.log(reverseSeq(5))