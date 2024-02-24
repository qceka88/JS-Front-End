function roadRadar(currentSpeed, zone) {
    let speedLimit = 0;

    if (zone === 'motorway') {
        speedLimit = 130;
    } else if (zone === 'interstate') {
        speedLimit = 90;
    } else if (zone === 'city') {
        speedLimit = 50;
    } else if (zone === 'residential') {
        speedLimit = 20;
    }

    let difference = currentSpeed - speedLimit;
    let status = null;

    if (difference <= 0) {
        console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`)
        return;
    } else if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
         status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                11.	Road Radar
Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
•	On the motorway, the limit is 130 km/h
•	On the interstate, the limit is 90 km/h
•	In the city, the limit is 50 km/h 
•	Within a residential area, the limit is 20 km/h
If the driver is within the limits, there should be a printed speed and the speed limit. 
                \`Driving {speed} km/h in a {speed limit} zone\`
If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
\`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}\`
For speeding up to 20 km/h over the limit, the status should be speeding.
For speeding up to 40 km/h over the limit, the status should be excessive speeding.
For anything else, status should be reckless driving.
The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
The output should be printed on the console.





____________________________________________________________________________________________
Example_01

Input
40, 'city'

Output
Driving 40 km/h in a 50 zone

____________________________________________________________________________________________
Example_02

Input
200, 'motorway'

Output
The speed is 70 km/h faster than the allowed speed of 130 - reckless driving

```