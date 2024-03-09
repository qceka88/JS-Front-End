function perfectNumber(inputNum) {
    let possibleMaxDivisor = Math.floor(inputNum / 2);
    let properDivisors = [...Array(possibleMaxDivisor)].map((_, i) => i + 1).filter(a => inputNum % a === 0);

    let sumDivisors = properDivisors.reduce((a, d) => a + d, 0);

    if (sumDivisors === inputNum) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}


perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
perfectNumber(1);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                              8. Perfect Number 
Write a function that receives a number and checks if that number is perfect or NOT.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
Output
•\tIf the number is perfect, print: "We have a perfect number!"
•\tOtherwise, print: "It's not so perfect."




____________________________________________________________________________________________
Example

Input
1

Output
It's not so perfect.


```