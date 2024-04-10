const baseURL = 'http://localhost:3030/jsonstore/tasks';

const loadBtnElement = document.getElementById('load-meals');
const addBtnElement = document.getElementById('add-meal')
const editBtnElement = document.getElementById('edit-meal')
const mealListElement = document.getElementById('list');
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

let currentMealId = null;
const loadMeals = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();

    mealListElement.innerHTML = '';

    for (const meal of Object.values(data)) {
        const changeBtnElement = document.createElement('button');
        changeBtnElement.classList.add('change-meal');
        changeBtnElement.textContent = 'Change';

        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('delete-meal');
        deleteBtnElement.textContent = 'Delete';

        const buttonContainerElement = document.createElement('div');
        buttonContainerElement.id = 'meal-buttons';
        buttonContainerElement.appendChild(changeBtnElement);
        buttonContainerElement.appendChild(deleteBtnElement);

        const foodH2Element = document.createElement('h2');
        foodH2Element.textContent = meal.food;

        const timeH3Element = document.createElement('h2');
        timeH3Element.textContent = meal.time;

        const calorieH3Element = document.createElement('h2');
        calorieH3Element.textContent = meal.calories;

        const mealElement = document.createElement('div');
        mealElement.classList.add('meal');
        mealElement.appendChild(foodH2Element);
        mealElement.appendChild(timeH3Element);
        mealElement.appendChild(calorieH3Element);
        mealElement.appendChild(buttonContainerElement);

        mealListElement.appendChild(mealElement);

        changeBtnElement.addEventListener('click', (e) => {
            currentMealId = meal._id;

            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            caloriesInputElement.value = meal.calories;

            editBtnElement.disabled = false;
            addBtnElement.disabled = true;
            mealElement.remove();
        });

        deleteBtnElement.addEventListener('click', async (e) => {
            await fetch(`${baseURL}/${meal._id}`, {
                method: 'DELETE'
            })
            mealElement.remove();
        });
    }
}

loadBtnElement.addEventListener('click', loadMeals);

addBtnElement.addEventListener('click', async (e) => {
    const {food, calories, time} = getInputData();

    if (!food || !calories || !time) {
        return;
    }

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(
            {food, calories, time}
        )
    });

    if (!response.ok) {
        return;
    }
    clearInputData();
    loadMeals();

});

editBtnElement.addEventListener('click', (e) => {
    const {food, calories, time} = getInputData();


    const response = fetch(`${baseURL}/${currentMealId}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            _id: currentMealId,
            food,
            calories,
            time
        })
    });

    if (!response.ok) {
        return;
    }
    clearInputData();
    loadMeals();

    editBtnElement.disabled = true;
    addBtnElement.disabled = false;

    currentMealId = null;
});

function getInputData() {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;

    return {food, time, calories};
}

function clearInputData() {
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
}
