function extractText() {
    let list = document.getElementById('items');
    let textArea = document.getElementById('result');

    textArea.textContent = list.innerText;
}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               2.\tCollect List Items
Write a JS function that scans a given HTML list and appends all collected list items’ text 
to a textarea on the same page when the user clicks on a button.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.


```