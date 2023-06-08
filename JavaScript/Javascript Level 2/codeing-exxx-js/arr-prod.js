products = [
    {"id": 1, "name": "Product 1", "price": 1099, "category": "Electronics"},
    {"id": 2, "name": "Product 2", "price": 2499, "category": "Clothing"},
    {"id": 3, "name": "Product 3", "price": 799, "category": "Electronics"},
    {"id": 4, "name": "Product 4", "price": 1499, "category": "Furniture"},
    {"id": 5, "name": "Product 5", "price": 4999, "category": "Clothing"},
    {"id": 6, "name": "Product 6", "price": 3999, "category": "Electronics"},
    {"id": 7, "name": "Product 7", "price": 1299, "category": "Furniture"},
    {"id": 8, "name": "Product 8", "price": 2999, "category": "Electronics"},
    {"id": 9, "name": "Product 9", "price": 1999, "category": "Clothing"},
    {"id": 10, "name": "Product 10", "price": 899, "category": "Electronics"}
]

// find all the products belonging to the give category 
function allProductsByCategory(products, categoryName) {
  let prod = products.filter(function(ele){
    return ele.category === categoryName
  })

  return prod
}

console.log(allProductsByCategory(products, 'Electronics')) // [all electronic products]
console.log(allProductsByCategory(products, 'Grocery')) // []


// find all the products belonging to the given categories 
function allProductsByCategories(products, categories) {
  let prod2 = products.filter(function(ele){
    // for(let i=0; i<categories.length; i++){
    //   if(ele.category == categories[i]){
    //     return ele.category == categories[i]
    //   }
    // }
    return categories.includes(ele.category)
  })

  return prod2
} 
console.log(allProductsByCategories(products, ['Electronics', 'Furniture']))


// find all the products in the price range 
function priceRange(products, min, max) {
  let prod3 = products.filter(function(ele){
    return ele.price >= min && ele.price <= max
  })

  return prod3
}

console.log(priceRange(products, 1500, 3000))
console.log(priceRange(products, 0, 1000))