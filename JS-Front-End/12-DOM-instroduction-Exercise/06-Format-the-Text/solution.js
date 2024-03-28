function solve() {
    const inputElement = document.getElementById('input');
    let resultElement = document.getElementById('output');

    const inputTextArray = inputElement.value.split('.').map(a => a.trim()).filter(a => a !== '');
    let tempArray = [];

    while (inputTextArray.length > 0) {
        const sentence = inputTextArray.shift();
        tempArray.push(sentence);

        if (tempArray.length === 3 || inputTextArray.length === 0) {
            const currentParagraph = document.createElement('p');
            currentParagraph.textContent = tempArray.join('.') +'.'
            tempArray = [];
            resultElement.appendChild(currentParagraph)
        }
    }
}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                        6.\tFormat the Text
Create a functionality that gets a text from textarea, formats the given text - you need to 
find out how many sentences there are in the text, simply split the whole text by '.' 
Also, every sentence must have at least 1 character.
 
Generate HTML paragraphs as a string (Use interpolation string to create paragraph 
element: \`<p> {text} </p>\`) and append it to the div with an id = "output".
 
 
When the [Format] button is clicked, get the text inside the textarea with an id="input" and format it.
 The formatting is done as follows:
•\tCreate a new paragraph element that holds no more than 3 sentences from the given input.
•\tHint: Use interpolation string to create paragraph element. (\`<p> {text} </p>\`)
•\tIf the given input contains less or 3 sentences, you need to create only 1 paragraph, 
fill it with these sentences and append this paragraph to the div with an id="output". 
Otherwise, when you have more than 3 sentences, create 
enough paragraphs to get all sentences from the textarea.
Just remember to restrict the sentences in each paragraph to 3.

```