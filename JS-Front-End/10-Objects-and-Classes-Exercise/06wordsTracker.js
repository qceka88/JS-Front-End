function wordsTracker(someInput) {
    let inputWords = someInput.shift().split(' ');
    let occurrences = [];

    for (const word of inputWords) {
        let count = someInput.filter(a => a === word).length;
        let wordOjb = {
            'word': word,
            'count': count,
        }
        occurrences.push(wordOjb)
    }

    let sortedOccurrences = occurrences.sort((a, b) => b.count - a.count)

    sortedOccurrences.forEach(w => console.log(`${w.word} - ${w.count}`));


}

wordsTracker([
        'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of',
        'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               6.\tWords Tracker
Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as an array of strings. The first string will contain the words you will be looking 
for separated by a space. All strings after that will be the words in which you will check for a match.
Print for each word how many times it occurs. The words should be sorted by count in descending.

_______________________________________________________________________________________
Example

Input
[
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 
'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]

Output
this - 3
sentence - 2


```