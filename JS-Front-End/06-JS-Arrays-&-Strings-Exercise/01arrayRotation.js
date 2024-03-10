function arrayRotation(someArray, rotations) {
    let result = someArray.slice();

    for (let i = 0; i < rotations; i++) {
        let firstNumber = result.shift();

        result.push(firstNumber);
    }

    console.log(result.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1.\tArray Rotation
Write a function that receives an array and the number of rotations you have to perform. 
Note: Depending on the number of rotations, the first element goes to the end.
Output
Print the resulting array elements separated by a single space.

____________________________________________________________________________________________
Example_01

Input
[51, 47, 32, 61, 21], 2

Output
32 61 21 51 47

```