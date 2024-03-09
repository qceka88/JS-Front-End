function minNumber(...someNumbers) {
    let compare = (a, b) => a < b ? a : b

    const [firstNum, secondNum, thirdNum] = someNumbers
    const smallestNum = compare(firstNum, compare(secondNum, thirdNum))

    console.log(smallestNum)

}


minNumber(2, 5, 3);
minNumber(600, 342, 123);
minNumber(25, 21, 4);
minNumber(2, 2, 2);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1. Format Grade
Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description.
•\t< 3.00 - "Fail"
•\t>= 3.00 and < 3.50 - "Poor"
•\t>= 3.50 and < 4.50 - "Good"
•\t>= 4.50 and < 5.50 - "Very good"
•\t>= 5.50 - "Excellent"


____________________________________________________________________________________________
Example

Input
3.33

Output
Poor (3.33)

```
