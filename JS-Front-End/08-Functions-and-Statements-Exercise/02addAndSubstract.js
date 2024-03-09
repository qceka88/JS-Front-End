function addAndSubtract(...someNumbers) {
    const [firstNum, secondNum, thirdNum] = someNumbers

    let sum = (a, b) => a + b
    let subtract = (a, b) => a - b

    let result = subtract(sum(firstNum, secondNum), thirdNum)

    console.log(result)
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               2. Add and Subtract
You will receive three integer numbers. 
Write a function sum() to calculate the sum of the first two integers and a function subtract(), 
which subtracts the result of the function the sum() and the third integer.



____________________________________________________________________________________________
Example

Input
23, 6, 10

Output
19

```

