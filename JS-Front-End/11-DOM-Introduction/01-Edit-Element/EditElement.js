function editElement(element, a, b) {
    let result = element.innerText

    if (result.includes(a)) {
        while (result.includes(a)) {
            result = result.replace(a,b)
        }

        element.innerText = result;
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