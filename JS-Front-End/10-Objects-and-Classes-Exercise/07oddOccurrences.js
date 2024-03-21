function oddOccurrences(someString) {
    const wordsArray = someString.toLowerCase().split(' ');
    const wordOccurrences = {};
    const result = [];

    for (const word of wordsArray) {
        const count = wordsArray.filter(w => w === word).length;
        if (!wordOccurrences[word]) {
            wordOccurrences[word] = count;
        }

    }

    for (const word in wordOccurrences) {
        if (wordOccurrences[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '))

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               7.\tOdd Occurrences
Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
The input comes as a single string. The words will be separated by a single space.


____________________________________________________________________________________________
Example

Input
'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'


Output
c# php 1 5


```