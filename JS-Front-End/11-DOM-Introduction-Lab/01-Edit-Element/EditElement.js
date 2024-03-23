function editElement(element, firstWord, secondWord) {
    let result = element.innerText;

    let replaceWords = function (target, replaceable, text) {
        ```
            Recursion is unnecessary but is beautiful!
        ```
        let output = text.slice();

        if (!output.includes(target)) {
            return output;
        }

        output = output.replace(target, replaceable)
        return replaceWords(target, replaceable, output)
    }

    if (result.includes(firstWord)) {
        element.innerText = replaceWords(firstWord, secondWord, result);
    } else {
        element.innerText = replaceWords(secondWord, firstWord, result);
    }
}


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1.\tEdit Element 
Create function edit() that takes three parameters.
Input/Output
The first parameter is a reference to an HTML element, the other two parameters are string–match and replacer.
You have to replace all occurrences of the match inside the text content of the given element with a replacer.


```