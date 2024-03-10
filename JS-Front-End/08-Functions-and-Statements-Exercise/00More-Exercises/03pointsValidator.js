function pointsValidator(someArray) {
    let isValid = ([x1, y1, x2, y2]) => Number.isInteger(Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2)));
    let generatePointsArrays = (x) => [[x[0], x[1], 0, 0], [x[2], x[3], 0, 0], x];

    function validation(somePoints) {
        let p = somePoints.shift();

        console.log(`{${p[0]}, ${p[1]}} to {${p[2]}, ${p[3]}} is ${isValid(p) ? 'valid' : 'invalid'}`);

        if (somePoints.length === 0) {
            return;
        }
        return validation(somePoints);
    }

    validation(generatePointsArrays(someArray));

}

pointsValidator([3, 0, 0, 4]);
pointsValidator([2, 1, 1, 1]);




//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                3.\t*Validity Checker
Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2. 
Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid. 
A distance between two points is considered valid if it is an integer value. 
Note: You can use the following formula to help you calculate the distance between the points (x1, y1) and (x2, y2).
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
In case a distance is valid, print: \`{x1, y1} to {x2, y2} is valid\`
If the distance is invalid, print: \`{x1, y1} to {x2, y2} is invalid\`
The input consists of two points given as 4 numbers.
For each comparison print either \`{x1, y1} to {x2, y2} is valid\` 
if the distance is valid, or \`{x1, y1} to {x2, y2} is invalid\` if it is invalid.


____________________________________________________________________________________________
Example

Input
2, 1, 1, 1

Output
{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid


```