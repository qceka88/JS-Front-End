function convert(someString) {
    let jsonObj = JSON.parse(someString);

    for (const attr of Object.keys(jsonObj)) {
        console.log(`${attr}: ${jsonObj[attr]}`)
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               3.\tConvert to Object
Write a function that receives a string in JSON format and converts it to an object.
Loop through all the keys and print them with their values in format: "{key}: {value}"
.



____________________________________________________________________________________________
Example

Input
'{"name": "George", "age": 40, "town": "Sofia"}'

Output
name: George
age: 40
town: Sofia


```