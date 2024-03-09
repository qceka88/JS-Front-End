function charactersInRange(firstChar, secondChar) {
    let findOrder = (a, b) => a < b ? [a, b] : [b, a];

    let [start, end] = findOrder(firstChar.charCodeAt(0), secondChar.codePointAt(0));

    let result = [];

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(...result)

}

charactersInRange('#', ':');



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               3. Characters in Range
Write a function that receives two characters and prints on a single line all 
the characters in between them according to the ASCII code. Keep in mind that 
the second character code might be before the first one inside the ASCII table.



____________________________________________________________________________________________
Example

Input
'a','d'

Output
b c

```
