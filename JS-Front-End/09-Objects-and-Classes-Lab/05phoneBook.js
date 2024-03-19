function phoneBook(inputData) {
    let phoneBook = {};

    for (const record of inputData) {
        const [name, number] = record.split(' ');

        phoneBook[name] = number;
    }

    for (const name in phoneBook) {
        let row = `${name} -> ${phoneBook[name]}`;
        console.log(row);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               5.\tPhone Book
Write a function that stores information about a person’s name and phone number.
The input is an array of strings with space-separated name and number. Replace duplicate names.
Print the result as shown.




____________________________________________________________________________________________
Example

Input
['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']


Output
Tim -> 0876566344
Peter -> 0877547887
Bill -> 0896543112


```