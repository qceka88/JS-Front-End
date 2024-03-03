function hashTag(text) {
    let words = text.split(' ');

    for (const word of words) {
        if (word.startsWith('#') && RegExp('#[a-zA-Z]+').test(word)){
            console.log(word.slice(1))
        }
    }
}


hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               6.\tModern Times of #(HashTag)
The input will be a single string.
Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed. 
Finally, print out all the special words you found without the label (#) on a new line.


____________________________________________________________________________________________
Example_01

Input
'Nowadays everyone uses # to tag a #special word in #socialMedia'

Output
'Nowadays everyone uses # to tag a #special word in #socialMedia'

```