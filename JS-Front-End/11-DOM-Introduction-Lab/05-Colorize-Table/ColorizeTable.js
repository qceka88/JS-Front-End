function colorize() {
    let elements = document.getElementsByTagName("tr");

    for (let i = 0; i < elements.length; i++) {
        const row = elements[i];
        if (i % 2 !== 0){
            row.style.backgroundColor = 'teal';
        }
    }
}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                              5.\tColorize Table
Write a JS function that changes the color of all even rows when the user clicks a button. 
Apply the color "Teal" to the target rows.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.




```