function convertToJSON(firstName, lastName, hairColor) {
    let jsonObj = {
        name: firstName,
        lastName,
        hairColor,
    };


    console.log(JSON.stringify(jsonObj));
}

convertToJSON('George', 'Jones', 'Brown');

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               4.\tConvert to JSON
Write a function that receives a first name, last name, hair color and sets them to an object.
Convert the object to JSON string and print it.


____________________________________________________________________________________________
Example

Input
'George', 'Jones', 'Brown'


Output
{"name":"George","lastName":"Jones","hairColor":"Brown"}


```