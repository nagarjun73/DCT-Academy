function countAll(a){
    let Obj = {'DIGITS':0, 'LETTERS':0}

    for (let i = 0; i < a.length; i++){
        if (!Number.isNaN(parseInt(a[i]))) {
            Obj['DIGITS']++
        } else if (a[i] !== ' ' && typeof a[i] === 'string') {
            Obj['LETTERS']++
        }
    }
    return Obj
}

console.log(countAll("Hello World"));
console.log(countAll("H3ll0 Wor1d"));