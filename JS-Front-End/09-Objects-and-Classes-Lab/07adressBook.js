function addressBook(someInput) {
    let book = {};

    for (const record of someInput) {
        let [name, address] = record.split(':');
        book[name] = address;
    }

    let sortedNames = Object.fromEntries(Object.entries(book).sort((a, b) => a[0].localeCompare(b)));

    for (const name in sortedNames) {
        console.log(`${name} -> ${sortedNames[name]}`)
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                7.\tAddress Book
Write a function that stores information about a person’s name and his address. 
The input comes as an array of strings. Each string contains the name and the address 
separated by a colon. If you receive the same name twice just replace the address. 
In the end, print the full list, sorted alphabetically by the person’s name.




____________________________________________________________________________________________
Example

Input
['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']



Output
Bill -> Ornery Rd
Peter -> Carlyle Ave
Tim -> Doe Crossing


```