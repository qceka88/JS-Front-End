function boardGames() {
    const baseURL = 'http://localhost:3030/jsonstore/games';

    const formElement = document.querySelector('#form > form');
    const [
        nameInputElement,
        typeInputElement,
        maxPlayersInputElement
    ] = formElement.querySelectorAll('input');
    const [addBtnElement, editBtnElement] = document.querySelectorAll('#btn-container > button');
    const loadBtnElement = document.getElementById('load-games');
    const gamesListElement = document.querySelector('#games-list');

    loadBtnElement.addEventListener('click', (e) => {
        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                gamesListElement.innerHTML = '';
                for (const record of Object.values(data)) {
                    const cardElement = document.createElement('div');

                    cardElement.classList.add('board-game');
                    cardElement.innerHTML = `
                                          <div class="content">
                                            <p>${record.name}</p>
                                            <p>${record.type}</p>
                                            <p>${record.players}</p>
                                          </div>
                                          <div class="buttons-container">
                                            <button class="change-btn">Change</button>
                                            <button class="delete-btn">Delete</button>
                                          </div>
                    `;
                    gamesListElement.appendChild(cardElement);

                    const [changeBtn, deleteBtn] = cardElement.querySelectorAll('button');

                    changeBtn.addEventListener('click', (e) => {
                        addBtnElement.disabled = true;
                        cardElement.remove();

                        nameInputElement.value = record.name;
                        typeInputElement.value = record.type;
                        maxPlayersInputElement.value = record.players;
                        formElement.id = record._id;
                        editBtnElement.disabled = false;
                    });

                    deleteBtn.addEventListener('click', (e) => {
                        fetch(`${baseURL}/${record._id}`, {
                            method: 'DELETE',
                            headers: {'content-type': 'application/json'}
                        })
                            .catch(error => console.log(`DELETE ERROR: `, error));
                        cardElement.remove();
                    });

                }
            })
            .catch(error => console.log('GET ERROR: ', error));
    });

    addBtnElement.addEventListener('click', (e) => {
        modifyAddRecords(e, 'POST', baseURL);

    });

    editBtnElement.addEventListener('click', (e) => {
        modifyAddRecords(e, 'PUT', `${baseURL}/${formElement.id}`);
    });

    async function modifyAddRecords(event, method, targetURL) {
        const inputData = getInputData();
        if (inputData) {
            clearInputForm();
            await fetch(targetURL, {
                method: method,
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(inputData)
            })
                .catch(error => console.log(`${method} ERROR: `, error));
            await loadBtnElement.click();
        }

    }

    function getInputData() {
        const name = nameInputElement.value;
        const type = typeInputElement.value;
        const maxPlayers = maxPlayersInputElement.value;
        console.log(maxPlayers)

        if (!name || !type || !maxPlayers) {
            return false;
        }

        return {
            'name': name,
            'type': type,
            'players': maxPlayers
        };

    }

    function clearInputForm() {
        nameInputElement.value = '';
        typeInputElement.value = '';
        maxPlayersInputElement.value = '';
    }
}

boardGames();