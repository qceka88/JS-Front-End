function upperCase(stringRow) {
    let result = '';

    let currentWord = '';
    for (let i = 0; i <= stringRow.length; i++) {
        let character = stringRow[i];

        if (/[^\w]/g.test(character) || i === stringRow.length) {
            currentWord = currentWord.replace(/[^\w]/g, '');

            if (result === '') {
                result += currentWord;
            } else if (currentWord !== '') {
                result += `, ${currentWord}`;
            }
            currentWord = '';
        } else {
            currentWord += character;
        }
    }

    console.log(result.toUpperCase());
}

upperCase('Hi, how are you?');
upperCase('hello');


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                       2.\t*Words Uppercase
Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".
The input comes as a single string argument - the text to extract and convert words from.
The output should be a single line containing the converted string.




____________________________________________________________________________________________
Example

Input
'Hi, how are you?'

Output
HI, HOW, ARE, YOU

```
