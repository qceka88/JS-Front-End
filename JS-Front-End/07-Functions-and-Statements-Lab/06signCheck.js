function signCheck(numOne, numTwo, numThree) {

    let signResult = (numOne < 0 ? 1 : 0) + (numTwo < 0 ? 1 : 0) + (numThree < 0 ? 1 : 0);

    if (signResult % 2 !== 0) {
        console.log('Negative');
    } else {
        console.log('Positive')
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               6. Sign Check
Write a function, that checks whether the result of the multiplication 
numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.
Input
The input comes as parameters named numOne, numTwo, numThree.
Output
•\tIf the result is positive, print on the console -> "Positive"
•\tOtherwise, print -> "Negative"


____________________________________________________________________________________________
Example

Input
 5, 12,-15


Output
Negative

```