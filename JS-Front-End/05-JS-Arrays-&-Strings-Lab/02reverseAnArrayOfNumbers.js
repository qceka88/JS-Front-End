function reversedArray(quantity, someArray) {
    let cutArray = someArray.slice(0, quantity);
    let reverseArray = cutArray.reverse();

    console.log(reverseArray.join(' '));
}

reversedArray(3, [10, 20, 30, 40, 50]);
reversedArray(4, [-1, 20, 99, 5]);
reversedArray(2, [66, 43, 75, 89, 47]);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                         2.\tReverse an Array of Numbers
Write a program, which receives a number n and an array of elements. Your task is to create a new 
array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.


____________________________________________________________________________________________
Example_01

Input
4, [-1, 20, 99, 5]

Output
5 99 20 -1

```