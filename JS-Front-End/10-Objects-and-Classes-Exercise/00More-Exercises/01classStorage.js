class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        let [price, quantity] = [product['price'], product['quantity']];
        this.storage.push(product);
        this.capacity -= quantity;
        this.totalCost += price * quantity;
    }

    getProducts() {
        return this.storage.map(a => JSON.stringify(a)).join('\n');
    }
}


let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1.\tClass Storage
Create a class Storage. It should have the following properties, while the constructor should only receive a capacity:
•\tcapacity – a number that decreases when adding a given quantity of products to storage
•\tstorage – list of products (object). Each product should have:
o\tname - a string
o\tprice – a number (price is for a single piece of product)
o\tquantity – a number
•\ttotalCost – the sum of the cost of the products
The class should also have the following methods:
•\taddProduct – a function that receives a product and adds it to the storage
•\tgetProcuts – a function that returns all the products in storage in JSON format, each on a new line
Paste only the class Storage in judge (Note: all names should be as described)




____________________________________________________________________________________________
Example

Input
let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);



Output
{"name":"Cucamber","price":1.5,"quantity":15}
{"name":"Tomato","price":0.9,"quantity":25}
{"name":"Bread","price":1.1,"quantity":8}
2
53.8



```