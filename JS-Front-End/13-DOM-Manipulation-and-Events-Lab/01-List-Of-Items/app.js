function addItem() {
    const inputElement = document.querySelector('main > #newItemText');
    const ulElement = document.querySelector('main > ul');

    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    ulElement.appendChild(liElement);
}


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               1.\tList of Items
Write a function that reads the text inside an input field and appends the 
specified text to a list inside an HTML page



!! CHECK PICTURE

```