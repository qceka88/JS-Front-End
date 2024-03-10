function carWash(commandsArray) {
    let result = commandsArray.slice();

    const commandMap = {
        'soap': x => x + 10,
        'water': x => x * 1.2,
        'vacuum cleaner': x => x * 1.25,
        'mud': x => x * 0.9
    };

    result = result.reduce((a,c) =>  (commandMap[c](a)) ,0);

    console.log(`The car is ${result.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1.\tCar Wash
Write a JS function that receives some commands. Depending on the command, 
add or subtract a percentage of how much the car is cleaned or dirty. Start from 0. 
The first command will always be 'soap':
•\tsoap – add 10 to the value
•\twater – increase the value by 20%
•\tvacuum cleaner – increase the value by 25%
•\tmud – decrease the value by 10%
The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
             \`The car is {value}% clean.\`
  Note: The value should be rounded to the second decimal point.



____________________________________________________________________________________________
Example

Input
['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']

Output
The car is 39.00% clean.

```