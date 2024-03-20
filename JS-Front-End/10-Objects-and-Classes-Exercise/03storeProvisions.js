function storeProvisions(stock, ordered) {
    const storage = {};
    const allProducts = [...stock, ...ordered];
    let control = (p, c, s) => !s[p] ? s[p] = Number(c) : s[p] += Number(c);

    for (let i = 0; i < allProducts.length; i += 2) {
        const product = allProducts[i];
        const quantity = allProducts[i + 1];

        control(product, quantity, storage);
    }

    for (const product in storage) {
        console.log(`${product} -> ${storage[product]}`);
    }

}

storeProvisions([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               3.\tStore Provision
You will receive two arrays. The first array represents the current stock of the local store. 
The second array will contain products that the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and every odd index will hold the quantity 
of that product. The second array could contain products that are already in the local store. 
If that happens increase the quantity for the given product. You should store them into an object, 
and print them in the following format: (product -> quantity)
All of the arrays’ values will be strings.


____________________________________________________________________________________________
Example

Input
[
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]


Output
Chips -> 5
CocaCola -> 9
Bananas -> 44
Pasta -> 11
Beer -> 2
Flour -> 44
Oil -> 12
Tomatoes -> 70


```