function sortingNumbers(someArray) {
    let sortedArray = someArray.slice().sort((a, b) => a - b);
    let arrayLength = sortedArray.length
    let result = [];

    for (let i = 0; i < Math.ceil(arrayLength / 2); i++) {
        let number = sortedArray[i]
        result.push(number);
        if (i < Math.floor(arrayLength / 2)) {
            let number = sortedArray[arrayLength - i - 1];
            result.push(number);
        }
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([-1, 2, 1]);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               4.\tSorting Numbers
Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on. 
Return the resulting array.


____________________________________________________________________________________________
Example_01

Input
[1, 65, 3, 52, 48, 63, 31, -3, 18, 56]


Output
[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

```