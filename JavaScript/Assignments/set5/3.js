function invert(a){
    let obj = {}
    for (const key in a) {
        let value = obj[key]
        console.log(value);
        obj[value] = key
    }
    return obj
}

console.log(invert({ "a": 1, "b": 2, "c": 3 }));