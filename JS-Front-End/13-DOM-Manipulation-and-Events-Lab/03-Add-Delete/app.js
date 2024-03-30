function addItem() {
    const inputElement = document.getElementById('newItemText');
    const listElements = document.getElementById('items');

    const newElement = document.createElement('li');
    newElement.textContent = inputElement.value;

    const newLink = document.createElement('a');
    newLink.textContent = '[Delete]';
    newLink.href = '#';

    newLink.addEventListener('click', (e) => {
        newLink.parentElement.remove();
    });

    newElement.appendChild(newLink);

    listElements.appendChild(newElement);
    inputElement.value = '';

}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               3.\tAdd / Delete
Extend the previous problem to display a [Delete] link after each list item. 
Clicking it should delete the item with no confirmation. 
You have to add href="#" to the link element.


!! CHECK PICTURE

```