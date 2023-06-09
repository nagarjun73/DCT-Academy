// function firstPlace(a) {
//     let rev = a.split('').reverse().join('')
//     let result = ''
//     let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//     for (let i = 0; i < rev.length; i++){
//         if (char.includes(rev[i])){
//             result += rev[i]
//             break
//         }
//     }
//     if (!result) {
//         return 'No road available'
//     }
//     return result
// }

// console.log(firstPlace("====b===O===e===U=A=="));


function fruitSalad(a){
    let chunks = []
    for (let i = 0; i < a.length; i++){
        chunks.push(a[i].slice(0, Math.floor(a[i].length / 2)))
        chunks.push(a[i].slice(Math.floor(a[i].length / 2)))
        
    }
    // let sortedChunks = chunks.sort()
    // let finalString = sortedChunks.join('')
    return chunks
}

console.log(fruitSalad(["apple", "pear", "grapes"]));