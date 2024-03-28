function solve() {
    const inputTextElement = document.getElementById('text');
    const conventionElement = document.getElementById('naming-convention');
    let resultElement = document.getElementById('result');


    const camelCase = (words) => {
        const firstWord = words.shift().toLowerCase();
        const restOfWords = actions['Pascal Case'](words);
        return firstWord + restOfWords;
    }
    const pascalCase = (words) => {
        words = words.map(w => actions['capitalize'](w));
        return words.join('');
    }

    const actions = {
        'Camel Case': camelCase,
        'Pascal Case': pascalCase,
        'capitalize': w => w[0].toUpperCase() + w.slice(1).toLowerCase(),
    };

    let target = conventionElement.value
    if (!actions[target]) {
        resultElement.textContent = 'Error!'
    } else {
        resultElement.textContent = actions[target](inputTextElement.value.split(' '));
    }


}
//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                    2.\tPascal or Camel Case
An HTML file is given and your task is to write a function that takes two string parameters as an 
input and transforms the first parameter to the type required by the second parameter.
•\tThe first parameter will be the text that you need to modify depending on the second parameter.
The words in it will always be separated by space.
•\tThe second parameter will be either "Camel Case" or "Pascal Case". In case of different input, your output should be "Error!"
When the button is clicked the function should convert the first string to either of the cases. 
The output should consist of only one word - the string you have modified. Once your output is done, 
you should set it as HTML to the <span> element. For more information, see the examples below:

____________________________________________________________________________________________
Example

Input
"secOND eXamPLE", "Pascal Case"

Output
SecondExample

```

