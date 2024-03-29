function generateReport() {
    const resultElement = document.getElementById('output');
    const headElements = document.querySelectorAll('table > thead > tr > th > input');
    const bodyElements = document.querySelectorAll('table > tbody > tr');

    let result = [];
    const titleArray = Array.from(headElements)
    const checked = titleArray.filter(a => a.checked)

    if (checked.length < 1) {
        return;
    }

    for (const row of bodyElements) {
        const employeeData = row.querySelectorAll('td');

        let temp = {};
        checked.forEach((e) => {
            const index = titleArray.indexOf(e);
            const key = e.parentNode.textContent.trim().toLowerCase();

            temp[key] = employeeData[index].textContent.trim();
        });

        result.push(temp);
    }

    resultElement.value = JSON.stringify(result, null, 2);
}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                        8.\tGenerate Report
You will be given a web page, containing a table and output area. 
 
When the "Generate Report" button is pressed:
•\tYou must generate a JSON report from the data inside the table,
 by only taking the columns, which are selected.
Each table header has a checkbox. If the checkbox is checked, then 
the data from this column must be included in the report. Unchecked columns must be omitted. 
 
For every row (excluding the header):
•\tCreate an object with properties for each of its columns.
•\tThe name of each property is the name attribute of the column’s header, 
and the value is the text content of the cell.
•\tStore the result in an array and output it as a JSON string 
display it inside the <textarea> with id "output". See the example for details.
 
Input/Output
There will be input, your program must execute based on the page content. 
he output must be a JSON string, displayed in the <textarea> with id "output".

```