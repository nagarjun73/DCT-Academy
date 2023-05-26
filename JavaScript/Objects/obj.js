const cart = [
    { id: 1, isVeg: true, name: 'khali dosa', price: 54, quantity: 2 },
    { id: 2, isVeg: true, name: 'masala dosa', price: 60, quantity: 1 }
]

//list all the items in the cart
for(let i=0; i<cart.length; i++){
  console.log(cart[i].name, cart[i].price, cart[i].quantity, cart[i].isVeg);
}

//Total amount of cart and Quantity
let totalPrice = 0
let count = 0
for(let i=0; i<cart.length; i++){
  totalPrice +=cart[i].price * [cart[i].quantity]
  count +=cart[i].quantity
}
console.log('Total count of Quantity ' , count);
console.log('Total amount of cart item ', totalPrice);