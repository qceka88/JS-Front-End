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
