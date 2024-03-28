function search() {
    const townsElements = document.querySelectorAll('#towns > li');
    const inputElement = document.getElementById('searchText');
    const resultElement = document.getElementById('result');
    let count = 0;

    Array.from(townsElements).forEach(c => c.style.textDecoration = 'none');

    for (const town of townsElements) {
        if (town.textContent.includes(inputElement.value)) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            count++;
        }
    }

    resultElement.textContent = `${count} matches found`
    inputElement.value = '';

}
//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                    4.\tSearch in List
An HTML page holds a list of towns, a search box, and a [Search] button. 
Implement the search function to bold and underline the items from the list 
which include the text from the search box. Also, print the number of items the 
current search matches in the format \`${matches} matches found\`.
Note: It is necessary to clear the results of the previous search.
Write your JavaScript code in this file:


!! CHECK PICTURE

```