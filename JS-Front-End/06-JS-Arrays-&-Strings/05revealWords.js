function unCensor(someString, text) {
    let words = someString.split(', ');
    let result = text.slice();

    let startIndex = -1;
    let endIndex = -1;
    for (let i = 0; i <= text.length; i++) {
        let symbol = text[i];

        if (symbol === '*') {
            if (startIndex < 0) {
                startIndex = i;
            }
            endIndex = i;
        } else if (startIndex >= 0) {
            let word = words.find((w) => w.length === endIndex + 1 - startIndex);
            result = result.slice(0, startIndex) + word + result.slice(endIndex + 1, text.length);
            startIndex = -1;
            endIndex = -1;
        }
    }

    console.log(result)

}

unCensor('great', 'softuni is a***** place for learning new programming languages');
unCensor('great, learning', 'a*****, sof*tuni is ***** place for ******** new programming langu*ages !*****!');
unCensor('great, learning', '* a*****, sof*tuni is ***** place for ******** new programming langu*ages !*****!');


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               5.\tReveal Words
Write a function, which receives two parameters. 
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string that contains templates containing '*'.
Find the word with the same length as the template and replace it.

____________________________________________________________________________________________
Example_01

Input
'great',
'softuni is ***** place for learning new programming languages'

Output
softuni is great place for learning new programming languages

```