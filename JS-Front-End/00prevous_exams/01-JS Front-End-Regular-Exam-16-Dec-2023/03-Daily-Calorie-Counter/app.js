const baseURL = 'http://localhost:3030/jsonstore/tasks';

const mealsListElement = document.getElementById('list');
const loadMealsBtnElement = document.getElementById('load-meals');

const addMealBtnElement = document.getElementById('add-meal');
const [foodInputElement, timeInputElement, caloriesInputElement] = document.querySelectorAll('#form > form > input');

const editMealBtnElement = document.getElementById('edit-meal');
const formElement = document.querySelector('#form > form');

loadMealsBtnElement.addEventListener('click', (e) => {
    mealsListElement.innerHTML = '';

    fetch(baseURL)
        .then(response => response.json())
        .then(data => {

            for (const meal of Object.values(data)) {
                const newMealElement = document.createElement('div');

                newMealElement.classList.add('meal');
                newMealElement.innerHTML = `
                            <h2>${meal.food}</h2>
                            <h3>${meal.time}</h3>
                            <h3>${meal.calories}</h3>
                `
                const buttonsWrapper = document.createElement('div');
                buttonsWrapper.id = 'meal-buttons';
                const btnChangeEl = document.createElement('button');
                btnChangeEl.classList.add('change-meal');
                btnChangeEl.textContent = 'Change';
                const btnDeleteEl = document.createElement('button');
                btnDeleteEl.classList.add('delete-meal');
                btnDeleteEl.textContent = 'Delete';

                buttonsWrapper.appendChild(btnChangeEl);
                buttonsWrapper.appendChild(btnDeleteEl);
                newMealElement.appendChild(buttonsWrapper);

                mealsListElement.appendChild(newMealElement);

                btnChangeEl.addEventListener('click', (e) => {
                    formElement.id = meal._id;

                    foodInputElement.value = meal.food;
                    timeInputElement.value = meal.time;
                    caloriesInputElement.value = meal.calories;

                    newMealElement.remove();
                    editMealBtnElement.disabled = false;
                    addMealBtnElement.disabled = true;
                });

                btnDeleteEl.addEventListener('click', (e) => {
                    fetch(`${baseURL}/${meal._id}`, {
                        method: 'DELETE',
                        headers: {'content-type': 'application/json'}
                    })
                        .catch(error => console.log('ERROR', error));
                    newMealElement.remove();
                });
            }

        })
        .catch(error => console.log('ERROR', error))
});

addMealBtnElement.addEventListener('click', async (e) => {
    const inputData = getInput();


    if (inputData) {
        await fetch(baseURL, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(inputData)
        }).catch(error => console.log('ERROR', error))
        loadMealsBtnElement.click();
    }


});

editMealBtnElement.addEventListener('click', async (e) => {
    const inputData = getInput();

    if (inputData) {
        await fetch(`${baseURL}/${formElement.id}`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(inputData)
        }).catch(error => console.log('ERROR', error));

        loadMealsBtnElement.click();
    }
});

function getInput() {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;

    if (!food || !time || !calories) {
        return false;
    }
    clearInput();
    return {food, time, calories};
}

function clearInput() {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
}