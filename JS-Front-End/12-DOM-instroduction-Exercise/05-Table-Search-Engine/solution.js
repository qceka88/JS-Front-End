function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const rowElements = document.querySelectorAll('tbody > tr');
        const inputElement = document.getElementById('searchField');

        Array.from(rowElements).forEach(el => el.classList.remove('select'));

        for (const row of rowElements) {
            const data = row.querySelectorAll('td');

            for (const part of data) {
                if (part.textContent.includes(inputElement.value)) {
                    row.classList.add('select');
                    break;
                }
            }
        }
        inputElement.value = '';
    }
}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                        5.	Table - Search Engine
Write a function that searches in a table by given input.
 
When the "Search" button is clicked, go through all cells in the table except 
for the first row (Student name, Student email, and Student course) and check 
if the given input has a match (check for both full words and single letters).
If any of the rows contain the submitted string, add a class select to that row. 
Note that more than one row may contain the given string. 
Оtherwise, if there is no match, nothing should happen.
Note: After every search ("Search" button is clicked), clear the input field and 
remove all already selected classes (if any) from the previous search, 
for the new search to contain only the new result.

```