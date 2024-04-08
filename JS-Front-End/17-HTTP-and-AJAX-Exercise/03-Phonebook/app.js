function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/phonebook';

    const [loadBtnElement, createBtnElement] = document.querySelectorAll('body > button')
    const [personElement, phoneElement] = document.querySelectorAll('input[type=text]');
    const listElement = document.getElementById('phonebook');

    createBtnElement.addEventListener('click', createRecord);
    loadBtnElement.addEventListener('click', loadRecords);

    function loadRecords() {
        listElement.innerHTML = '';

        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                for (const record of Object.values(data)) {
                    const newLi = document.createElement('li');
                    newLi.textContent = `${record.person}: ${record.phone}`;
                    newLi.id = record._id;

                    const newDeleteBtn = document.createElement('button');
                    newDeleteBtn.textContent = 'Delete';
                    newDeleteBtn.addEventListener('click', deleteRecord)

                    newLi.appendChild(newDeleteBtn);
                    listElement.appendChild(newLi);
                }
            })
    }

    function deleteRecord(e) {
        const parentLI = e.currentTarget.parentNode;

        fetch(`${baseURL}/${parentLI.id}`, {
            method: "DELETE",
        })
            .then(() => loadRecords());
    }

    function createRecord() {
        fetch(baseURL, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                person: personElement.value,
                phone: phoneElement.value,
            })
        });

        personElement.value = '';
        phoneElement.value = '';
    }
}

attachEvents();