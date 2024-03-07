function formatGrade(someNumber) {
    let result = '';

    if (someNumber < 3) {
        result = `Fail (2)`;
    } else if (someNumber < 3.50) {
        result = `Poor (${someNumber.toFixed(2)})`;
    } else if (someNumber < 4.50) {
        result = `Good (${someNumber.toFixed(2)})`;
    } else if (someNumber < 5.50) {
        result = `Very good (${someNumber.toFixed(2)})`
    } else if (someNumber < 6.00) {
        result = `Excellent (${someNumber.toFixed(2)})`;
    }

    console.log(result);
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);


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