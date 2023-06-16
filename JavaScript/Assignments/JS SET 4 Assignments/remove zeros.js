function removeZeros(a) {
    let a2 = '' + a
    let a1 = a2.split('')
    let result = []
    for (let i = 0; i < a1.length; i++){
                if (parseInt(a1[i]) !== 0) {
                    result.push(a1[i])
                } 
            }
    return result.join('')
}

console.log(removeZeros(1023002));
console.log(removeZeros(6006606.203));
