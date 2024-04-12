function vacation() {
    const baseURL = 'http://localhost:3030/jsonstore/tasks';

    const formElement = document.querySelector('#form > form');
    const [nameInputElement, daysInputElement, dateInputElement] = formElement.querySelectorAll('input');
    const [addBtnElement, editBtnElement] = formElement.querySelectorAll('button');

    const loadBtnElement = document.getElementById('load-vacations');
    const vacationsListElement = document.getElementById('list');

    loadBtnElement.addEventListener('click', (event) => {
        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                vacationsListElement.innerHTML = '';
                for (const record of Object.values(data)) {
                    const newContainer = document.createElement('div');
                    newContainer.classList.add('container');
                    newContainer.innerHTML = `
                                            <h2>${record.name}</h2>
                                            <h3>${record.date}</h3>
                                            <h3>${record.days}</h3>
                                            <button class="change-btn">Change</button>
                                            <button class="done-btn">Done</button>
                                            `;

                    vacationsListElement.appendChild(newContainer);
                    const [changeBtn, doneBtn] = newContainer.querySelectorAll('button');

                    changeBtn.addEventListener('click', (event) => {
                        newContainer.remove();

                        nameInputElement.value = record.name;
                        daysInputElement.value = record.days;
                        dateInputElement.value = record.date;
                        formElement.id = record._id;

                        addBtnElement.disabled = true;
                        editBtnElement.disabled = false;
                    });

                    doneBtn.addEventListener('click', (event) => {
                        fetch(`${baseURL}/${record._id}`, {
                            method: 'DELETE',
                            headers: {'content-type': 'application/json'},
                        })
                            .catch(error => console.log('DELETE ERROR: ', error));
                        loadBtnElement.click();
                    });

                }
            })
            .catch(error => console.log('GET ERROR: ', error))
    });

    addBtnElement.addEventListener('click', (event) => {
        modifyAddRecords(event, 'POST', baseURL);
    });
    editBtnElement.addEventListener('click', (event) => {
        modifyAddRecords(event, 'PUT', `${baseURL}/${formElement.id}`);
        editBtnElement.disabled = true;
        addBtnElement.disabled = false;
    });

    async function modifyAddRecords(event, method, targetUrl) {
        const inputData = getInputData();
        event.preventDefault();
        if (inputData) {
            clearInputForm();
            await fetch(targetUrl, {
                method: method,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(inputData)
            })
                .catch(error => console.log(`${method} ERROR: `, error))
            await loadBtnElement.click();
        }
    }

    function getInputData() {
        const name = nameInputElement.value;
        const days = daysInputElement.value;
        const date = dateInputElement.value;

        if (!name || !days || !date) {
            return false;
        }

        return {
            'name': name,
            'days': days,
            'date': date
        };
    }

    function clearInputForm() {
        nameInputElement.value = '';
        daysInputElement.value = '';
        dateInputElement.value = '';
    }

}

vacation();
