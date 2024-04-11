function christmasGifts() {
    const baseURL = 'http://localhost:3030/jsonstore/gifts';

    const formElement = document.querySelector('#form > form');
    const [presentInputElement, forInputElement, priceInputElement] = formElement.querySelectorAll('input');
    const [addBtnElement, editBtnElement, loadBtnElement] = document.querySelectorAll('button');

    const giftsListElement = document.querySelector('#gift-list');


    loadBtnElement.addEventListener("click", (e) => {
        editBtnElement.disabled = true;
        giftsListElement.innerHTML = '';
        fetch(baseURL)
            .then(response => response.json())
            .then(data => {

                for (const giftID in data) {
                    const gift = data[giftID];

                    const giftDivElement = document.createElement('div');
                    giftDivElement.classList.add('gift-sock');

                    giftDivElement.innerHTML = `
                                              <div class="content">
                                                <p>${gift.gift}</p>
                                                <p>${gift.for}</p>
                                                <p>${gift.price}</p>
                                              </div>
                                              <div class="buttons-container">
                                                <button class="change-btn">Change</button>
                                                <button class="delete-btn">Delete</button>
                                              </div>
                                               `;
                    const [changeBtn, deleteBtn] = giftDivElement.querySelectorAll('button');

                    changeBtn.addEventListener('click', (e) => {

                        formElement.id = gift._id;
                        presentInputElement.value = gift.gift;
                        forInputElement.value = gift.for;
                        priceInputElement.value = gift.price;

                        giftDivElement.remove();
                        editBtnElement.disabled = false;
                    });

                    deleteBtn.addEventListener('click', async (e) => {
                        fetch(`${baseURL}/${gift._id}`, {
                            method: 'DELETE',
                            headers: {'content-type': 'application/json'},
                        })
                            .catch(error => console.log('ERROR: ', error));
                        await loadBtnElement.click();
                    });

                    giftsListElement.appendChild(giftDivElement);
                }
            })
            .catch(error => console.log('ERROR: ', error))
    });

    addBtnElement.addEventListener('click', async (e) => {
        const inputData = getInputData();

        if (inputData) {
            clearInputFields();
            await fetch(baseURL, {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(inputData),
            })
                .catch(error => console.log('ERROR: ', error));
            await loadBtnElement.click();
        }
    });

    editBtnElement.addEventListener('click', async (e) => {
        const inputData = getInputData();
        if (inputData) {

            const giftID = formElement.id;
            fetch(`${baseURL}/${giftID}`, {
                method: 'PUT',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(inputData),
            })
                .catch(error => console.log('ERROR: ', error));
            clearInputFields();
            loadBtnElement.click();
        }
    });


    function getInputData() {
        const present = presentInputElement.value;
        const forData = forInputElement.value;
        const price = priceInputElement.value;

        if (!present || !forData || !price) {
            return false;
        }
        return {
            'gift': present,
            'for': forData,
            'price': price,
        };
    }

    function clearInputFields() {
        presentInputElement.value = '';
        forInputElement.value = '';
        priceInputElement.value = '';
    }
}

christmasGifts();