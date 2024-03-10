function printDNA(lengthDNA) {
    const couplesDNA = [['A', 'T'], ['C', 'G'], ['T', 'T'], ['A', 'G'], ['G', 'G']];

    const operatorsMap = {
        '+': '-',
        '-': '+',
    }
    let rowDNA = (a, b) => `${'*'.repeat(2 - b)}${a[0]}${'-'.repeat(b * 2)}${a[1]}${'*'.repeat(2 - b)}`;

    let [width, operator] = [0, '-']

    for (let i = 0; i < lengthDNA; i++) {
        let currentCouple = couplesDNA.shift()
        operator = i % 2 === 0 ? operatorsMap[operator] : operator

        console.log(rowDNA(currentCouple, width));

        width = eval(`${width}${operator}${1}`);
        couplesDNA.push(currentCouple);
    }
}

printDNA(10);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               5.\tPrint DNA
Write a JS program that prints a DNA helix with a length, specified by the user. 
The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. 
See the examples for more information.
The input comes as a single number. It represents the length of the required helix.
The output is the completed structure, printed on the console.




____________________________________________________________________________________________
Example

Input
4

Output
**AT**
*C--G*
T----T
*A--G*


```