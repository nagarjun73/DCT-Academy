function Product(id, name, price, rating){
  this.id = id
  this.name = name
  this.price = price
  this.rating = rating
}

Product.prototype.details = function(){
    return `${this.name} costs INR ${this.price} and has a ${'*'.repeat(this.rating)} rating`
}

const p1 = new Product(1, 'marker', 500, 4.3)
console.log(p1);
console.log(p1.details());
const p2 = new Product(1, 'bark', 600, 3.3)
console.log(p2);