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
        products.forEach(([a,b]) => console.log(`  ${a}: ${b}`) );
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