// const currentInventory = [
//     { name: "HTC", stock: 25 },
//     { name: "Nokia", stock: 1000 },
//     { name: "Samsung", stock: 50 },
//     { name: "Sony", stock: 10 },
//     { name: "Apple", stock: 15 }
// ]

// const newInventory = [
//     { name: "LG", stock: 5 },
//     { name: "Sony", stock: 10 },
//     { name: "Samsung", stock: 5 },
//     { name: "Apple", stock: 15 }
// ]

// function updateInventory(currentInventory, newInventory) {

// }


const currentInventory = [
    { name: "HTC", stock: 25 },
    { name: "Nokia", stock: 1000 },
    { name: "Samsung", stock: 50 },
    { name: "Sony", stock: 10 },
    { name: "Apple", stock: 15 }
]

const newInventory = [
    { name: "LG", stock: 5 },
    { name: "Sony", stock: 10 },
    { name: "Samsung", stock: 5 },
    { name: "Apple", stock: 15 }
]

function updateInventory(currentInventory, newInventory) {
  newInventory.forEach(function(newItem){
    const item = currentInventory.find(function(currItem){
      return currItem.name == newItem.name
    })

    if(item){
      item.stock += newItem.stock
    }else{
      currentInventory.push(newItem)
    }
  })

  return currentInventory
}

console.log(updateInventory(currentInventory, newInventory))


const totalCount = currentInventory.reduce(function(prevValue, currValue){
  prevValue += currValue.stock
  return prevValue
}, 0)

console.log(totalCount);