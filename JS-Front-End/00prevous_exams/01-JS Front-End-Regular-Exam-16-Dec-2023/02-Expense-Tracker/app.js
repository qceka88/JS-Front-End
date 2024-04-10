window.addEventListener("load", solve);

function solve() {
    const [inputTypeElement, inputAmountElement, inputDateElement] = document.querySelectorAll('form > input');
    const addButtonElement = document.getElementById('add-btn');

    const previewListElement = document.getElementById('preview-list');
    const expensesListElement = document.getElementById('expenses-list');
    const deleteBtnElement = document.querySelector('button.btn.delete');


    addButtonElement.addEventListener('click', (e) => {
        const type = inputTypeElement.value;
        const amount = inputAmountElement.value;
        const date = inputDateElement.value;

        if (!type || !amount || !date) {
            return;
        }
        addButtonElement.disabled = true;

        inputTypeElement.value = '';
        inputAmountElement.value = '';
        inputDateElement.value = '';

        const newLiElement = document.createElement('li');
        newLiElement.classList.add('expense-item');
        previewListElement.appendChild(newLiElement);

        const newArticleElement = document.createElement('article');
        newArticleElement.innerHTML = `
        <p>Type: ${type}</p>
        <p>Amount: ${amount}$</p>
        <p>Date: ${date}</p>
        `
        const newButtonsWrapper = document.createElement('div');
        newButtonsWrapper.classList.add('buttons');

        const newEditBtnElement = document.createElement('button');
        newEditBtnElement.classList.add('btn', 'edit');
        newEditBtnElement.textContent = 'edit';

        const newOkBtnElement = document.createElement('button');
        newOkBtnElement.classList.add('btn', 'ok');
        newOkBtnElement.textContent = 'ok';

        newButtonsWrapper.appendChild(newEditBtnElement);
        newButtonsWrapper.appendChild(newOkBtnElement);

        newLiElement.appendChild(newArticleElement);
        newLiElement.appendChild(newButtonsWrapper);


        newEditBtnElement.addEventListener('click', (e) => {
            addButtonElement.disabled = false;
            newLiElement.remove();

            inputTypeElement.value = type;
            inputAmountElement.value = amount;
            inputDateElement.value = date;
        });

        newOkBtnElement.addEventListener('click', (e) => {
            addButtonElement.disabled = false;
            newButtonsWrapper.remove();

            expensesListElement.appendChild(newLiElement);
        });

    });


    deleteBtnElement.addEventListener('click', (e) => {
        expensesListElement.innerHTML = '';

    });
}