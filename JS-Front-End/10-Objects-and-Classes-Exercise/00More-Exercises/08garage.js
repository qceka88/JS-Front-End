function garage(someInput) {
    let garage = {};
    let carNum = 1;

    for (const row of someInput) {
        let [garageNumber, carDataDetails] = row.split(' - ');

        if (!garage[garageNumber]) {
            garage[garageNumber] = {};
        }

        if (!garage[garageNumber][carNum]) {
            garage[garageNumber][carNum] = {};

            for (const carData of carDataDetails.split(', ')) {
                let [characteristic, value] = carData.split(': ');

                garage[garageNumber][carNum][characteristic] = value;
            }
        }
        carNum++;
    }

    for (const garageNumber in garage) {
        let currentGarage = garage[garageNumber];
        console.log(`Garage № ${garageNumber}`);
        for (const carNumber in currentGarage) {
            let carData = Object.entries(currentGarage[carNumber])
                                .map(([k, v], i) => `${k} - ${v}`)
                                .join(', ');

            console.log(`--- ${carData}`);
        }
    }
}

garage([
        '1 - color: blue, fuel type: diesel',
        '1 - color: red, manufacture: Audi',
        '2 - fuel type: petrol',
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
    ]
);

garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
);



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               8.\tGarage
Write a function that stores cars in garages. You will be given an array of strings. 
Each string will contain a number of a garage and info about a car. You have to store 
the car (with its info) in the given garage. The info about the car will be in the format:
 "{key1}: {value1}, {key2}: {value2}…"
If the garage does not exist, create it. The cars will always be unique. At the end print the result in the format:
"Garage № {number}:
--- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
--- {the same for the next car}
Garage № {number}: …"

____________________________________________________________________________________________
Example

Input
['1 - color: blue, fuel type: diesel',
 '1 - color: red, manufacture: Audi', 
 '2 - fuel type: petrol',
 '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
  ]



Output
Garage № 1
--- color - blue, fuel type - diesel
--- color - red, manufacture - Audi
Garage № 2
--- fuel type - petrol
Garage № 4
--- color - dark blue, fuel type - diesel, manufacture - Fiat

```