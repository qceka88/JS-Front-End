function makeDictionary(someInput) {
    let result = {};

    for (const row of someInput) {
        const [[term, definition]] = Object.entries(JSON.parse(row));

        result[term] = definition;
    }


    let sortedResult = Object.entries(result)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .reduce((acc, [k, v]) => ({...acc, [k]: v}), {})

    for (const term in sortedResult) {
        console.log(`Term: ${term} => Definition: ${sortedResult[term]}`)
    }
}


makeDictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               9.\tMake a Dictionary
You will receive an array with strings in the form of JSON's. 
You have to parse these strings and combine them into one object. Every string 
from the array will hold terms and a description. If you receive the same term twice, replace it with the new definition.
Print every term and definition in that dictionary on new line in format:
\`Term: \${term} => Definition: \${definition}\`
Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.





____________________________________________________________________________________________
Example

Input
[
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]



Output
Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare.
Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
Term: Microphone => Definition: An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded.
Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.



```