function sumDigits(number) {
    let stringNumber = number.toString();
    let totalSum = 0;

    for (let i = 0; i < stringNumber.length; i++) {
        totalSum += parseInt(stringNumber[i]);
    }
    console.log(totalSum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                      6.\tSum Digits
Write a function, which will be given a single number. 
Your task is to find the sum of its digits.



____________________________________________________________________________________________
Example_01

Input
245678

Output
32


____________________________________________________________________________________________
Example_02

Input
97561

Output
28

```