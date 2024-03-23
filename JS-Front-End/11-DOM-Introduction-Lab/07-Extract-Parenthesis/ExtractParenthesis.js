function extract(content) {
    let text = document.getElementById(content).textContent.match(/(?<=\().*?(?=\))/g);

    return text.join(';');
}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                             7.\tExtract Parenthesis
Write a JS function that when executed, extracts all parenthesized text from a target paragraph by given element ID. 
The result is a string, joined by "; " (semicolon, space).
Input
Your function will receive a string parameter, representing the target element ID, 
from which text must be extracted. The text should be extracted from the DOM.


```