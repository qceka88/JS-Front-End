function censor(text, word) {
    let newString = text

    while (newString.includes(word)) {
        newString = newString.replace(word, '*'.repeat(word.length));
    }

    console.log(newString);
}

censor('A small sentence with some words', 'small');
censor('Find the hidden word', 'hidden');
censor('Findis is  isthe isis hidden word', 'is');


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                                 5.\tCensored Words
Write a function that receives a text as a first parameter and a single word as a second. 
Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

____________________________________________________________________________________________
Example_01

Input
'A small sentence with some words', 'small'

Output
A ***** sentence with some words

```