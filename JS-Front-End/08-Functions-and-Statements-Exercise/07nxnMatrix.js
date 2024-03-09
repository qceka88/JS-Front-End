function matrix(baseNumber) {

    let singleRow = a => `${a} `.repeat(a).slice().trim();
    let multyLine = (a, b) => `${a}\n`.repeat(b).slice().trim();

    console.log(multyLine(singleRow(baseNumber), baseNumber));

}


matrix(7);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               7. NxN Matrix
Write a function that receives a single integer number n and prints nxn matrix with that number.



____________________________________________________________________________________________
Example

Input
3

Output
3 3 3
3 3 3
3 3 3


```