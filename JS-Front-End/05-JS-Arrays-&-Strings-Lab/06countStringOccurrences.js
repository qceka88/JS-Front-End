function countOccurrences(text, word) {
    let counter = 0;

    for (let part of text.split(' ')) {
        if (part === word) {
            counter += 1;
        }
    }

    console.log(counter);
}

countOccurrences('This is a word and it also is a sentence', 'is');
countOccurrences('softuni is great place for learning new programming languages', 'softuni');


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                6.\tCount String Occurrences
Write a function that receives a text and a single word that you need to search. 
Print the number of all occurrences of this word in the text.


____________________________________________________________________________________________
Example_01

Input
'This is a word and it also is a sentence',
'is'


Output
2

```