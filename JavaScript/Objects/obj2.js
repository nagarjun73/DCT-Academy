const products = [
    {
        "name": "Product A",
        "price": 19.99,
        "ratings": 4.5
    },
    {
        "name": "Product B",
        "price": 29.99,
        "ratings": 4.2
    },
    {
        "name": "Product C",
        "price": 14.99,
        "ratings": 3.8
    },
    {
        "name": "Product D",
        "price": 39.99,
        "ratings": 4.7
    },
    {
        "name": "Product E",
        "price": 24.99,
        "ratings": 4.1
    },
    {
        "name": "Product F",
        "price": 9.99,
        "ratings": 3.5
    },
    {
        "name": "Product G",
        "price": 49.99,
        "ratings": 4.9
    },
    {
        "name": "Product H",
        "price": 34.99,
        "ratings": 4.3
    },
    {
        "name": "Product I",
        "price": 15.99,
        "ratings": 3.9
    },
    {
        "name": "Product J",
        "price": 54.99,
        "ratings": 4.6
    }
  ]

  //Task1. Display only the products whose rating is 4.5 and above
  console.log('products whose rating is 4.5 and above');
  // for(let i=0; i<products.length; i++){
  //   if(products[i].ratings >= 4.5)
  //   console.log(products[i].name, products[i].ratings);
  // }

  products.filter((s, i)=>{
    if(products[i].ratings >= 4.5)
    console.log(products[i].name, products[i].ratings);
  })

  //Task2. Display the products whose rating is between 4 to 4.5
  console.log('products whose rating is between 4 to 4.5');
  for(let i=0; i<products.length; i++){
    if(products[i].ratings >= 4 && products[i].ratings <= 4.5)
    console.log(products[i].name, products[i].ratings);
  }

  //Task3. Display the products whose price between 10 - 20
  console.log('products whose price between 10 - 20');
  for(let i=0; i<products.length; i++){
    if(products[i].price >= 10 && products[i].price <= 20)
    console.log(products[i].name, products[i].price);
  }