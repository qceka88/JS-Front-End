function flightSchedule(someInput) {
    let register = {};
    const [initialFlightData, changedFlights, status] = someInput;


    for (const flight of initialFlightData) {
        const [plane, city] = flight.split(' ');
        register[plane] = {'Destination': city, 'Status': 'Ready to fly'};
    }

    for (const flight of changedFlights) {
        const [plane, newStatus] = flight.split(' ');

        if (register[plane]) {
            register[plane]['Status'] = newStatus[0].toUpperCase() + newStatus.slice(1);
        }
    }

    for (const flight in register) {
        let currentPlane = register[flight]
        if (currentPlane['Status'] === status[0]) {
            console.log(currentPlane);
        }
    }

}

flightSchedule([
        [
            'WN269 Delaware',
            'FL2269 Oregon',
            'WN498 Las Vegas',
            'WN3145 Ohio',
            'WN612 Alabama',
            'WN4010 New York',
            'WN1173 California',
            'DL2120 Texas',
            'KL5744 Illinois',
            'WN678 Pennsylvania'
        ],
        [
            'DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK430 Cancelled'],
        ['Cancelled']
    ]
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               4.\tFlight Schedule
You will receive an array with arrays.
The first array (at index 0) will hold all flights on a specific sector in the airport. 
The second array (at index 1) will contain newly changed statuses 
of some of the flights at this airport. The third array (at index 2) will have a single string,
which will be the flight status you need to check. When you put all flights into an object
and change the statuses depends on the new information on the second array. 
You must print all flights with the given status from the last array.
•\tIf the value of the string obtained from the third array is "Ready to fly":
o\tthen you must print flights that have not changed their status in the second array 
o\tand automatically change the status to "Ready to fly"
•\tOtherwise, print only flights that have changed their status.

____________________________________________________________________________________________
Example

Input
[['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
\t'WN612 Cancelled',
\t'WN1173 Cancelled',
\t'SK430 Cancelled'],
\t['Cancelled']
]

Output
{ Destination: 'Alabama', Status: 'Cancelled' }
{ Destination: 'California', Status: 'Cancelled' }
{ Destination: 'Texas', Status: 'Cancelled' }


```