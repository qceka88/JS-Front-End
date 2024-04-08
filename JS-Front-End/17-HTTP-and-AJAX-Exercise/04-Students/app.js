function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/collections/students';

    let tableBodyElement = document.querySelector('#results > tbody');
    const buttonElement = document.getElementById('submit');


    fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            for (const record of Object.values(data)) {
                const recordData = createTRow(...Object.values(record));
                tableBodyElement.appendChild(recordData)
            }
        })

    buttonElement.addEventListener('click', (e) => {
        let inputElements = document.querySelectorAll('input[type=text]');
        const inputValues = Array.from(inputElements).map(e => e.value);

        tableBodyElement.appendChild(createTRow(...inputValues));
        fetch(baseURL, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                firstName: inputValues[0],
                lastName: inputValues[1],
                facultyNumber: inputValues[2],
                grade: inputValues[3]
            })
        }).then(()=>{
            inputElements.forEach(e => e.value = '');
        })

    });


    function createTRow(firstName, lastName, facultyNumber, grade) {
        const newTableRow = document.createElement('tr');
        newTableRow.innerHTML = `<td>${firstName}</td>
                               <td>${lastName}</td>                              
                               <td>${facultyNumber}</td>                              
                               <td>${grade}</td>                              
                                `;

        return newTableRow;
    }
}

attachEvents();