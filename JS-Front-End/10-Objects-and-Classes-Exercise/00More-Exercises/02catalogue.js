function catalogue(someInput) {
    let result = {};
    let productDistributor = (r, l, p) => !r[l] ? r[l] = [p] : r[l].push(p);
    for (const product of someInput.sort((a, b) => a.localeCompare(b))) {
        const letter = product[0];
        productDistributor(result, letter, product);
    }

    for (const row in result) {
        let products = result[row].map(a => a.split(' : '));

        console.log(row);
        products.forEach(([a, b]) => console.log(`  ${a}: ${b}`));
    }
}

// Variant02

function catalogue2(someInput) {
    let result = {};
    let productDistributor = (r, l, p) => !r[l] ? r[l] = [p] : r[l].push(p);
    for (const product of someInput) {
        const letter = product[0];
        productDistributor(result, letter, product);
    }

    let sortedResult = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    for (const row of sortedResult) {
        let [letter, products] = [row[0], row[1].sort((a, b) => a.localeCompare(b))];
        products = products.map(a => a.split(' : '));

        console.log(letter);
        products.forEach(([a, b]) => console.log(`  ${a}: ${b}`));
    }

}

catalogue([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

\`\`\`

                               2.\tCatalogue
You have to create a sorted catalog of store products. You will be given the products’ 
names and prices. You need to order them in alphabetical order. 
The input comes as an array of strings. Each element holds info about a product in the following format:
"{productName} : {productPrice}"
The product’s name will be a string, which will always start with a capital letter, and 
the price will be a number. You can safely assume there will be NO duplicate product input. 
The comparison for alphabetical order is case-insensitive.
As output, you must print all the products in a specified format. They must be ordered 
exactly as specified above. The products must be divided into groups, by the initial of their name. 
The group's initial should be printed, and after that, the products should be printed with 2 spaces before
their names. For more info check the examples.


____________________________________________________________________________________________
Example

Input
[
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]



Output
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499


```

