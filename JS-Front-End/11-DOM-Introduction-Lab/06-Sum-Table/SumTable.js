function sumTable() {
    let elements = document.getElementsByTagName("td");
    let sumElement = document.getElementById('sum');
    let totalSum = 0;

    for (let i = 0; i < elements.length; i++) {
        let value = Number(elements[i].textContent);
        if (value) {
            totalSum += value;
        }
    }

    sumElement.textContent = String(totalSum);
}


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                             6.\tSum Table
Write a JS function that finds the first table in a document and sums the values 
in the last column. The result is then displayed in an element with ID "sum".
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.


```