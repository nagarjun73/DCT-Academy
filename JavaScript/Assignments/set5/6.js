function oldest(a){
    let objRev = {}
    let ages = []
    for (const key in a) {
        objRev[a[key]] = key
    }
    for (const key in objRev) {
        ages.push(key)
    }
    let oldest = Math.max(...ages)
    return objRev[oldest]
}

console.log(oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
}));