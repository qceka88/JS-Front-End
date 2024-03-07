function repeatString(someString, count) {

    function stringRecursion(a, b) {
        if (b === 0) {
            return '';
        } else {
            return a + stringRecursion(a, b - 1);
        }
    }

    console.log(stringRecursion(someString, count))


}

repeatString("abc", 3);
repeatString("String", 2);



//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               3. Repeat String
Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).




____________________________________________________________________________________________
Example

Input
"abc", 3

Output
abcabcabc

```