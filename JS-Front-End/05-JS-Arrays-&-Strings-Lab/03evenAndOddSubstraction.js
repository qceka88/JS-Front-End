function evenAndOddSubtraction(someArray) {
    let evenNumbers = 0;
    let oddNumbers = 0;

    for (let i = 0; i < someArray.length; i++) {
        let currentNumber = someArray[i];

        if (currentNumber % 2 === 0) {
            oddNumbers += currentNumber;
        } else {
            evenNumbers += currentNumber
        }
    }

    let result = oddNumbers - evenNumbers;

    console.log(result);

}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                           3.\tEven and Odd Subtraction
Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.


____________________________________________________________________________________________
Example_01

Input
[1,2,3,4,5,6]

Output
3

```