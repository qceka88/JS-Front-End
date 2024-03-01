function firstPlusLast(someArray) {
    let firstElement = someArray.shift();
    let lastElement = someArray.pop();

    let result = firstElement + lastElement;
    console.log(result);
}

firstPlusLast([20, 30, 40]);
firstPlusLast([10, 17, 22, 33]);
firstPlusLast([11, 58, 69]);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                        1.\tSum First and Last Array Elements
Write a function that receives an array of numbers and prints the sum of the first and last element in that array.

____________________________________________________________________________________________
Example_01

Input
[10, 17, 22, 33]

Output
43

```