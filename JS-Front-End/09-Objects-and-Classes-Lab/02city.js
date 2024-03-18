function city(someObject) {

    for (const attr of Object.keys(someObject)) {
        let row = `${attr} -> ${someObject[attr]}`;

        console.log(row);
    }

}

city({
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1.\tPerson Info
Write a function that receives 3 parameters, sets them to an object, and returns that object.
The input comes as 3 separate strings in the following order: firstName, lastName, age.



____________________________________________________________________________________________
Example

Input
{
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}


Output
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000

```