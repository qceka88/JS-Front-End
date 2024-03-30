function deleteByEmail() {
    const listElements = document.querySelectorAll('#customers > tbody > tr');
    const inputElement = document.querySelector('label > input');
    const resultElement = document.getElementById('result');

    for (const row of Array.from(listElements)) {
        const currentEmail = row.querySelector('td:last-of-type');

        if (currentEmail.textContent.toLowerCase().includes(inputElement.value.toLowerCase())) {
            row.remove();
            resultElement.textContent = 'Deleted.'

            return;
        }
    }

    resultElement.textContent = 'Not found.';

}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               2.\tDelete from Table
Write a program that takes an email from an input field and deletes the matching row from a table. 
•\tIf entry is found, the textContent in the element with id="result" must be set to "Deleted."
•\tOtherwise, an error should be displayed in a <div> with id="result". The error should be "Not found." 
Submit only the deleteByEmail() function in Judge. 
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.




!! CHECK PICTURE

```