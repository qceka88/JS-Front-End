function validityChecker(x01, y01, x02, y02) {

    let firstCheck = Math.sqrt((0 - x01) ** 2 + (0 - y01) ** 2);
    let secondCheck = Math.sqrt((0 - x02) ** 2 + (0 - y02) ** 2);
    let thirdCheck = Math.sqrt(((x02 - x01) ** 2) + ((y02 - y01) ** 2));

    if (Number.isInteger(firstCheck)) {
        console.log(`{${x01}, ${y01}} to {0, 0} is valid`);
    } else {
        console.log(`{${x01}, ${y01}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(secondCheck)) {
        console.log(`{${x02}, ${y02}} to {0, 0} is valid`);
    } else {
        console.log(`{${x02}, ${y02}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(thirdCheck)) {
        console.log(`{${x01}, ${y01}} to {${x02}, ${y02}} is valid`);
    } else {
        console.log(`{${x01}, ${y01}} to {${x02}, ${y02}} is invalid`);
    }

}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                1.\t*Validity Checker
Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2. Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid. A distance between two points is considered valid if it is an integer value. 
Note: You can use the following formula to help you calculate the distance between the points (x1, y1) and (x2, y2).
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
In case a distance is valid, print: \`{x1, y1} to {x2, y2} is valid\`
If the distance is invalid, print: \`{x1, y1} to {x2, y2} is invalid\`
The input consists of two points given as 4 numbers.
For each comparison print either \`{x1, y1} to {x2, y2} is valid\` if the distance is valid, or \`{x1, y1} to {x2, y2} is invalid\` if it is invalid.


____________________________________________________________________________________________
Example

Input
2, 1, 1, 1

Output
{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid


```