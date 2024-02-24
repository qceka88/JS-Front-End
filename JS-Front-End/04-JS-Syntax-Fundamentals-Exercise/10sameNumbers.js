function sameNumbers(number) {
    let stringNumber = number.toString();
    let isSame = true;
    let totalSum = Number(stringNumber[0]);
    let currentNumber = stringNumber[0];

    for (let i = 1; i < stringNumber.length; i++) {
        if (currentNumber !== stringNumber[i]) {
            isSame = false;
        }
        totalSum += Number(stringNumber[i]);
    }

    console.log(isSame);
    console.log(totalSum);
}


sameNumbers(2222222);
sameNumbers(1234);



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                10.	Same Numbers
Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
The input comes as an integer number.
The output should be printed on the console.





____________________________________________________________________________________________
Example_01

Input
2222222

Output
true
14


____________________________________________________________________________________________
Example_02

Input
1234

Output
false
10


```