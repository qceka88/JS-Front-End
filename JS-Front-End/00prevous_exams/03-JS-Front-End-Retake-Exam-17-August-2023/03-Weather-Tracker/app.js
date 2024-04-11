function weatherTracker() {
    const baseURL = 'http://localhost:3030/jsonstore/tasks';

    const formElement = document.querySelector('#form > form ')
    const [
        locationInputElement,
        temperatureInputElement,
        dateInputElement
    ] = formElement.querySelectorAll('input');

    const [addBtnElement, editBtnElement] = document.querySelectorAll('#btn-container > button');

    const historyListElement = document.getElementById('list');
    const loadBtnElement = document.getElementById('load-history');

    loadBtnElement.addEventListener('click', (e) => {
        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                historyListElement.innerHTML = '';
                for (const record of Object.values(data)) {
                    const newContainer = document.createElement('div');
                    newContainer.classList.add('container');

                    newContainer.innerHTML = `
                                            <h2>${record.location}</h2>
                                            <h3>${record.date}</h3>
                                            <h3 id="celsius">${record.temperature}</h3>
                                            <div id="buttons-container">  
                                                <button class="change-btn">Change</button>
                                                <button class="delete-btn">Delete</button>
                                            </div>
                                            `;

                    const [changeBtn, deleteBtn] = newContainer.querySelectorAll('#buttons-container > button');

                    changeBtn.addEventListener('click', (e) => {
                        locationInputElement.value = record.location;
                        temperatureInputElement.value = record.temperature;
                        dateInputElement.value = record.date;

                        newContainer.remove();

                        addBtnElement.disabled = true;
                        editBtnElement.disabled = false;
                        formElement.id = record._id;
                    });

                    deleteBtn.addEventListener('click', async (e) => {
                        await fetch(`${baseURL}/${record._id}`, {
                            method: 'DELETE',
                            headers: {'content-type': 'application/json'},
                        })
                            .catch(error => console.log('DELETE ERROR: ', error));
                        loadBtnElement.click();
                    });

                    historyListElement.appendChild(newContainer);
                }

            })
            .catch(error => console.log('GET ERROR: ', error))
    });

    addBtnElement.addEventListener('click', async (e) => {
        const inputData = getInputData();
        if (inputData) {
            clearInputForm();
            await fetch(baseURL, {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(inputData)
            })
                .catch(error => console.log('PUT ERROR: ', error))
            await loadBtnElement.click();
        }

    });

    editBtnElement.addEventListener('click',  async (e) => {
        const inputData = getInputData();
        if (inputData) {
            clearInputForm();
            await fetch(`${baseURL}/${formElement.id}`, {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(inputData)
            })
                .catch(error => console.log('POST ERROR: ', error))
            await loadBtnElement.click();
        }
    });


    function getInputData() {
        const location = locationInputElement.value;
        const temperature = temperatureInputElement.value;
        const date = dateInputElement.value;

        if (!location || !temperature || !date) {
            return false;
        }

        return {location, temperature, date};
    }

    function clearInputForm() {
        locationInputElement.value = '';
        temperatureInputElement.value = '';
        dateInputElement.value = '';
    }
}

weatherTracker();