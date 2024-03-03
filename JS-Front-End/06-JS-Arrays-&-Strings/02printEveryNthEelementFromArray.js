function arrayPrinter(someArray, step) {
    let result = someArray.filter((num, index) => index % step === 0);

    console.log(result);
    return result;
}


arrayPrinter(['5', '20', '31', '4', '20'], 2);
arrayPrinter(['dsa', 'asd', 'test', 'tset'], 2);
arrayPrinter(['1', '2', '3', '4', '5'], 6);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               2.\tPrint Every N-th Element from an Array 
The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.
The output is every element on the N-th step starting from the first one. If the step is 3, 
you need to return the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. 
The output is the return value of your function and must be an array.

____________________________________________________________________________________________
Example_01

Input
['5', '20', '31', '4', '20'], 2


Output
['5', '31', '20']

```