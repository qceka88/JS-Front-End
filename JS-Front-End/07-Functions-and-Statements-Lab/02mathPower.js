function mathPower(someNumber, power) {

    function recursionPower(a, b) {

        if (b === 0) {
            return 1;
        } else {

            return a * recursionPower(a, b - 1)
        }
    }

    console.log(recursionPower(someNumber, power))
}

mathPower(2, 8);
mathPower(3, 4);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               2. Math Power
Write a function that calculates and print the value of a number raised to a given power:



____________________________________________________________________________________________
Example

Input
2,8

Output
256

```