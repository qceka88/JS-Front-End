function piccolo(someInput) {
    let parking = {};
    let commands = {
        'IN': (a) => parking[a] = true,
        'OUT': (a) => delete parking[a],
    }
    for (const row of someInput) {
        const [direction, carNumber] = row.split(', ');
        commands[direction](carNumber);
    }

    let result = Object.keys(parking).length < 1 ? 'Parking Lot is Empty' : Object.keys(parking).sort().join('\n');

    console.log(result);
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA9998TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

piccolo([]
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               8.\tPiccolo
Write a function that:
•\tRecords a car number for every car that enters the parking lot
•\tRemoves a car number when the car goes out
•\tInput will be an array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number.
If the parking lot is empty, print: "Parking Lot is Empty".

____________________________________________________________________________________________
Example

Input
['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

Output
CA2822UU
CA2844AA
CA9876HH
CA9999TT


```