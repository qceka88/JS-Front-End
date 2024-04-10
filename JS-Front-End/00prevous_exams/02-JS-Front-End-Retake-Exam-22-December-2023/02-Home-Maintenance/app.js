function solve() {
    const [placeInput, actionInput, personInput] = document.querySelectorAll('form > input[type=text]');
    const addBtnElement = document.getElementById('add-btn');
    const currentTasksListElement = document.getElementById('task-list');
    const doneTasksListElement = document.getElementById('done-list');


    addBtnElement.addEventListener('click', (e) => {
        const inputData = getInput();

        if (inputData) {
            clearInputFields();

            const newLiElement = document.createElement('li');
            newLiElement.classList.add('clean-task');
            newLiElement.innerHTML = `<article>
                                    <p>Place: ${inputData.place}</p>
                                    <p>Action: ${inputData.action}</p>
                                    <p>Person: ${inputData.person}</p>
                                  </article>
                                  <div class="buttons">
                                  </div>
                                `

            const buttonsWrapper = newLiElement.querySelector('.buttons');
            const editBtnElement = document.createElement('button');
            editBtnElement.classList.add('edit');
            editBtnElement.textContent = 'Edit';
            const doneBtnElement = document.createElement('button');
            doneBtnElement.classList.add('done');
            doneBtnElement.textContent = 'Done';

            buttonsWrapper.appendChild(editBtnElement);
            buttonsWrapper.appendChild(doneBtnElement);
            newLiElement.appendChild(buttonsWrapper);


            editBtnElement.addEventListener('click', (e) => {
                placeInput.value = inputData.place;
                actionInput.value = inputData.action;
                personInput.value = inputData.person;

                newLiElement.remove();
            });

            doneBtnElement.addEventListener('click', (e) => {
                buttonsWrapper.remove();

                const deleteBtnElement = document.createElement('button');
                deleteBtnElement.classList.add('delete');
                deleteBtnElement.textContent = 'Delete';

                newLiElement.appendChild(deleteBtnElement);

                deleteBtnElement.addEventListener('click', (e) => {
                    newLiElement.remove();
                });

                doneTasksListElement.appendChild(newLiElement);
            });

            currentTasksListElement.appendChild(newLiElement);
            console.log(editBtnElement, doneBtnElement)
        }

    });

    function getInput() {
        const place = placeInput.value;
        const action = actionInput.value;
        const person = personInput.value;

        if (!place || !action || !person) {
            return false;
        }

        return {place, action, person}
    }

    function clearInputFields() {
        placeInput.value = '';
        actionInput.value = '';
        personInput.value = '';
    }
}


window.addEventListener("load", solve);